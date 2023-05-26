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
        //this.filteredCharacters = this.performFilter(value);

        this.currentPage = 1;
        this.getCharacters(this.pageSize, this.currentPage, this._sortBy, value);
        this.updatePageNumbers(); 


    }

    addedToFavoriteComic: IComic | undefined;

    pageTittle: string = 'Characters';
    imageWidth: number = 200;
    imageMargin: number = 2;
    showViewMore: boolean = false;

    showViewModal: boolean = false;

    characterId: number = 0;
    errorMessage: string = '';
    sub!: Subscription;

    pageSize: number = 10;
    currentPage: number = 1;
    totalPages = 0;
    pageNumbers: number[] = []; // Números de página a mostrar en los botones


    private _sortBy: string = '';
    sortByOptions: string[] = ['', 'name', 'modified'];
    get sortBy(): string {
        return this._sortBy;
    }
    set sortBy(value: string) {
        this._sortBy = value;
        this.currentPage = 1;
        this.getCharacters(this.pageSize, this.currentPage, value, this._listFilterCharacterByName);
        this.updatePageNumbers(); 

        console.log('In setter: ', value);
    }

    filteredCharacters: ICharacter[] = [];
    characters: ICharacter[] = []

    constructor(private characterService: CharacterService) { }

    comicId: number = 0;

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

    viewMore(characterId: number): void {
        this.showViewMore = !this.showViewMore;
        this.characterId = characterId;

    }
    viewModal(resourceURI: string): void {

        var parts = resourceURI.split('/');
        const comicIdString = parts[parts.length - 1];
        const comicId = parseInt(comicIdString, 10);

        this.comicId = comicId;
        this.showViewModal = !this.showViewModal;

    }
    onCloseModal(bool: boolean): void {
        this.showViewModal = bool;
        this.comicId = 0;

    }

    onViewMore(bool: boolean): void {
        this.showViewMore = bool;
        this.characterId = 0;

    }

    onAddedToFavorites(comic: IComic): void {
        this.addedToFavoriteComic = comic;
        this.onCloseModal(!this.showViewModal);
    }

    getCharacters(pageSize: number, currentPage: number, orderBy?: string, filterByName?: string) {
        this.sub = this.characterService.getCharacters(pageSize, currentPage, orderBy, filterByName).subscribe({
            next: data => {
                this.characters = data.results;
                this.filteredCharacters = this.characters;
                this.totalPages = Math.ceil(data.total / this.pageSize);
                this.updatePageNumbers(); 
            },
            error: err => this.errorMessage = err,
        });
    }

    previousPage() {
        // Navegar a la página anterior
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getCharacters(this.pageSize, this.currentPage, this._sortBy, this._listFilterCharacterByName);
        }
    }

    updatePageNumbers() {
        // Calcula los números de página a mostrar en los botones
        const currentPageIndex = this.currentPage - 1;
        let startPage = Math.max(0, currentPageIndex - 2);
        let endPage = Math.min(this.totalPages - 1, currentPageIndex + 2);

        if (endPage - startPage < 4) {
            // Asegura que siempre se muestren 5 botones (o menos si no hay suficientes páginas)
            if (startPage === 0) {
                endPage = Math.min(endPage + (4 - (endPage - startPage)), this.totalPages - 1);
            } else {
                startPage = Math.max(0, startPage - (4 - (endPage - startPage)));
            }
        }

        this.pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i + 1);
    }

    nextPage() {
        // Navegar a la página siguiente
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.getCharacters(this.pageSize, this.currentPage, this._sortBy, this._listFilterCharacterByName);

        }
    }
    goToPage(page: number) {
        // Navegar a una página específica
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
            this.currentPage = page;
            this.getCharacters(this.pageSize, this.currentPage, this._sortBy, this._listFilterCharacterByName);
        }
    }

    ngOnInit(): void {
        this.getCharacters(this.pageSize, this.currentPage);

        console.log('Character List In OnInit');
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}