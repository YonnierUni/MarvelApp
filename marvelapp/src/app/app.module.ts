import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './characters/character-list.component';
import { DeleteYear } from './shared/delete-year.pipe';
import { FavoriteComicsList } from './favourites/favorite-comics-list.component';
import { ModalComic } from './modal/modalComic/modal-comic.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalCharacter } from './modal/modalCharacter/modal-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    FavoriteComicsList,
    ModalComic,
    ModalCharacter,
    DeleteYear
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
