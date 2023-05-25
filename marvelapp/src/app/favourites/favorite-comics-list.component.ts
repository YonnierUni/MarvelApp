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
    favoriteComicsId: number[] = [];
    favoriteComics: IComic[] = [];
    imageWidth: number = 200;
    imageMargin: number = 2;
    errorMessage: string = '';
    sub!: Subscription;
    constructor(private favoriteComicsService: FavoriteComicsService) { }

    addedToFavorites(comicId: number): void {
        console.log("addedToFavourites ", comicId)
    }

    deleteToFavorites(comicId: number): void {
        console.log("deleteToFavourites ", comicId)
    }

    getComic(comicId: number) {
        this.sub = this.favoriteComicsService.getComics().subscribe({
            next: data => {
                this.favoriteComics = data;
            },
            error: err => this.errorMessage = err,
        });
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
