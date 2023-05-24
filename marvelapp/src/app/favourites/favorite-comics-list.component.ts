import { Component, Input, OnInit } from '@angular/core';
import { IComic } from './comic';

@Component({
    selector: 'app-favorite-comics',
    templateUrl: './favorite-comics-list.component.html',
    styleUrls: ['./favorite-comics-list.component.css']
})

export class FavoriteComicsList implements OnInit {
    FavoriteComicsListTittle: string = 'My Favourites';
    favoriteComics: IComic[] = [];

    ngOnInit(): void {
        console.log('In OnInit');
    }
}
