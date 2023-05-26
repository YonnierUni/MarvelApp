import { Component, Input, OnInit } from '@angular/core';
import { IComic } from './comic';
import { Subscription } from 'rxjs';
import { FavoriteComicsService } from '../services/favoriteComics';

@Component({
    selector: 'app-favorite-comics',
    templateUrl: './favorite-comics-list.component.html',
    styleUrls: ['./favorite-comics-list.component.css']
})

export class FavoriteComicsList implements OnInit {
    FavoriteComicsListTittle: string = 'My Favourites';
    favoriteComics: IComic[] = [];
    imageWidth: number = 200;
    imageMargin: number = 2;
    errorMessage: string = '';
    sub!: Subscription;
    constructor(private favoriteComicsService: FavoriteComicsService) { }

    private _newFavoriteComic: IComic | undefined;

    get newFavoriteComic(): IComic | undefined {
        return this._newFavoriteComic;
    }
    @Input() set newFavoriteComic(comic: IComic | undefined) {
        this._newFavoriteComic = comic;
        if (comic !== undefined) {
            this.favoriteComicsService.setComics(comic);
        }
        console.log("addedToFavourites ", comic);
    }

    deleteToFavorites(comicId: number): void {
        this.favoriteComicsService.deleteComic(comicId);
        //this.getComic();
        // console.log("deleteToFavourites ", this.getComic());
    }

    getComic() {
        this.sub = this.favoriteComicsService.getComics().subscribe({
            next: data => {
                this.favoriteComics = data;
            },
            error: err => this.errorMessage = err,
        });
    }

    ngOnInit(): void {
        this.getComic();
        console.log('Favorite In OnInit');
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
