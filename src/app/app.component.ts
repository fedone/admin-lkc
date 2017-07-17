import { Component, ViewChild } from '@angular/core';
import { fadeInAnimation } from './_animations/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': '' }
})
export class AppComponent {
}
