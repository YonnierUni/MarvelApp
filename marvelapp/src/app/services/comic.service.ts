import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IComic, IData } from "../favourites/comic";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ComicService {
    private comicUrl = ``;

    constructor(private http: HttpClient) { }

    getComic(comicId: number): Observable<IData> {    
        this.comicUrl =`http://gateway.marvel.com/v1/public/comics/${comicId}?ts=uni&apikey=ba2ec779f5f35876c235d49de50f129b&hash=6b0b6440bc1f25f8378d58f9d62d369c`;
        return this.http.get<any>(this.comicUrl).pipe(
            map(response => response.data),
            tap(data => console.log('COMIC'/*, JSON.stringify(data)*/)),
            catchError(this.handleError),
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // & client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}