import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ICharacter } from './character';
import { IComic } from '../favourites/comic';
import { CharacterService } from '../services/character.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-characters',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css'],
})

export class CharacterListComponent implements OnInit, OnDestroy {
    private _listFilterCharacterByName: string = '';

    get listFilterCharacterByName(): string {
        return this._listFilterCharacterByName;
    }
    @Input() set listFilterCharacterByName(value: string) {
        this._listFilterCharacterByName = value;
        this.filteredCharacters = this.performFilter(value);
    }
    pageTittle: string = 'Characters';
    imageWidth: number = 200;
    imageMargin: number = 2;
    showViewMore: boolean = false;

    showViewModal: boolean = false;

    idCharacter: number = 0;
    errorMessage: string = '';
    sub!: Subscription;

    private _sortBy: string = '';
    sortByOptions: string[] = ['', 'Option 1', 'Option 2'];
    get sortBy(): string {
        return this._sortBy;
    }
    set sortBy(value: string) {
        this._sortBy = value;
        console.log('In setter: ', value);
    }

    filteredCharacters: ICharacter[] = [];
    characters: ICharacter[] = []

    constructor(private characterService: CharacterService) { }

    comic: IComic = {
        id: 0,
        title: '',
        description: '',
        thumbnail: {
            path: '',
            extension: ''
        }
    };

    performFilter(filterBy: string): ICharacter[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.characters.filter((character: ICharacter) =>
            character.name.toLocaleLowerCase().includes(filterBy)
        );
    }

    performFilterBySelect(orderBy: string): ICharacter[] {
        orderBy = orderBy.toLocaleLowerCase();
        if (orderBy === orderBy) {
            return this.filteredCharacters.sort()
        }
        return this.filteredCharacters.sort()
    }

    viewMore(idCharacter: number): void {
        this.showViewMore = !this.showViewMore;
        this.idCharacter = idCharacter;

    }
    viewModal(resourceURI: string): void {
        this.showViewModal = !this.showViewModal;

        var parts = resourceURI.split('/');
        const comicIdString = parts[parts.length - 1];
        const comicId = parseInt(comicIdString, 10);

        this.comic = {
            id: comicId,
            title: '',
            description: '',
            thumbnail: {
                path: '',
                extension: ''
            }
        }

    }
    onCloseModal(bool: boolean): void {
        this.showViewModal = bool;
    }
    ngOnInit(): void {
        this.sub = this.characterService.getCharacters().subscribe({

            next: characters => {
                this.characters = characters;
                this.filteredCharacters = this.characters;
            },
            error: err => this.errorMessage = err,
        });
        console.log('Character List In OnInit');
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}