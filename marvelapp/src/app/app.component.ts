import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'MARVEL';
  listFilterCharacterByName: string = '';

  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = true;
  }
}
