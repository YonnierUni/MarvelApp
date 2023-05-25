import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { IComic, IData } from "../favourites/comic";

@Injectable({
    providedIn: "root"
})

export class FavoriteComicsService {
    private favoriteComicsId: IComic[] = [];

    getComics(): Observable<IComic[]> {
        return new Observable<IComic[]>((observer) => {
            setTimeout(() => {
                observer.next(this.favoriteComicsId);
                observer.complete();
            }, 1000);
        });
    }

    setComics(comics: IComic[]): void {
        this.favoriteComicsId = [...this.favoriteComicsId, ...comics];
    }
}