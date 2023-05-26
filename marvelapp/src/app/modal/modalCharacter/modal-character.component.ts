import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ICharacter, IData } from '../../characters/character';
import { Subscription } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';

@Component({
    selector: 'app-modal-character',
    templateUrl: './modal-character.component.html',
    styleUrls: ['./modal-character.component.css']
})

export class ModalCharacter implements OnInit, OnDestroy {
    ModalCharacterTittle: string = 'Modal Character';
    @Input() showViewMore: boolean = false;

    private _characterId: number = 0;
    get characterId(): number {
        return this._characterId;
    }
    @Input() set characterId(value: number) {
        this._characterId = value;
        if (value != 0) {
            this.getCharacter(value);
        }
    }
    imageWidth: number = 200;
    imageMargin: number = 2;
    character: ICharacter[] | undefined;
    errorMessage: string = '';
    sub!: Subscription;
    constructor(private characterService: CharacterService) { }

    @Output() closeViewMore: EventEmitter<boolean> =
        new EventEmitter<boolean>();

    onClick(): void {
        this.closeViewMore.emit(!this.showViewMore);
        this.character = undefined;
    }

    getCharacter(characterId: number) {
        this.sub = this.characterService.getCharacter(characterId).subscribe({
            next: data => {
                this.character = data.results;
            },
            error: err => this.errorMessage = err,
        });
    }

    ngOnInit(): void {
        console.log('In OnInit character');
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
