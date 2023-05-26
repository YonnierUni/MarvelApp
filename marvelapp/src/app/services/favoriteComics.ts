import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { IComic, IData } from "../favourites/comic";

@Injectable({
    providedIn: "root"
})

export class FavoriteComicsService {
    private favoriteComics: IComic[] = [];

    getComics(): Observable<IComic[]> {
        return new Observable<IComic[]>((observer) => {
            observer.next(this.favoriteComics);
            observer.complete();
        });
    }

    setComics(comic: IComic): void {
        if (!this.favoriteComics.find(comicc => comicc.id === comic.id)) {
            this.favoriteComics.push(comic);
        }
    }

    deleteComic(comicId: number): void {
        var comicToRemove = this.favoriteComics.find(comic => comic.id === comicId);

        // Eliminar el objeto utilizando la referencia almacenada
        if (comicToRemove) {
            const index = this.favoriteComics.indexOf(comicToRemove);
            if (index !== -1) {
                this.favoriteComics.splice(index, 1);
            }
        }
    }
}