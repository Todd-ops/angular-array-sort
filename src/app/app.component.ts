import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  onlyOdd = false;
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  numbers = [1,2,3,4,5]

 
}
