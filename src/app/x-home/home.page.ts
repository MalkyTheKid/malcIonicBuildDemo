import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  textCustom = 'hey there, this is the default text';
  totlClicked = 0;
  onChangeText() {
    this.totlClicked++;
    this.textCustom = 'Changed, for a number of ' + this.totlClicked +
    ' times!'; // this will point to {{ text }} parameter in home.page.html
  }

}
