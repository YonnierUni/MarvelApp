import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComic } from '../favourites/comic';

@Component({
    selector: 'app-modal-comic',
    templateUrl: './modal-comic.component.html',
    styleUrls: ['./modal-comic.component.css']
})

export class ModalComic implements OnInit {
    ModalComicTittle: string = 'Modal Comic';
    @Input() showViewModal: boolean = false;
    @Input() comic: IComic | undefined;

    @Output() closeModal: EventEmitter<boolean> =
        new EventEmitter<boolean>();

    onClick(): void {
        this.closeModal.emit(!this.showViewModal);
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}
