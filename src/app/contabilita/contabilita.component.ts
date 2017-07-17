import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-contabilita',
  templateUrl: './contabilita.component.html',
  styleUrls: ['./contabilita.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': '' }
})
export class ContabilitaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
