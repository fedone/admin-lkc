import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})


export class ConsoleComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

}
