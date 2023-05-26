import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IComic } from '../../favourites/comic';
import { Subscription } from 'rxjs';
import { ComicService } from 'src/app/services/comic.service';

@Component({
    selector: 'app-modal-comic',
    templateUrl: './modal-comic.component.html',
    styleUrls: ['./modal-comic.component.css']
})

export class ModalComic implements OnInit, OnDestroy {
    ModalComicTittle: string = 'Modal Comic';
    @Input() showViewModal: boolean = false;

    private _comicId: number = 0;
    get comicId(): number {
        return this._comicId;
    }
    @Input() set comicId(value: number) {
        this._comicId = value;
        if (value != 0) {
            this.getComic(value);
        }
    }
    imageWidth: number = 200;
    imageMargin: number = 2;
    comic: IComic[] | undefined;
    errorMessage: string = '';
    sub!: Subscription;
    constructor(private comicService: ComicService) { }

    @Output() closeModal: EventEmitter<boolean> =
        new EventEmitter<boolean>();

    onClick(): void {
        this.closeModal.emit(!this.showViewModal);
        this.comic = undefined;
    }

    @Output() addedToFavourites: EventEmitter<IComic> =
        new EventEmitter<IComic>();

    onClickAddedToFavourites(comic: IComic): void {
        this.addedToFavourites.emit(comic);
        this.comic = undefined;

        //console.log('onClickAddedToFavourites ', comic);
    }

    buyComic(comicId: number): void {
        console.log("buy comic ", comicId)
    }

    getComic(comicId: number) {
        this.sub = this.comicService.getComic(comicId).subscribe({
            next: data => {
                this.comic = data.results;
            },
            error: err => this.errorMessage = err,
        });
    }

    ngOnInit(): void {
        console.log('In OnInit comic');
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
