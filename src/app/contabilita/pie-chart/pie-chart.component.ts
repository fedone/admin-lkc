import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'pie-chart',
  template: ` 
  	<div style="display: block">
      <canvas baseChart style="position: relative; width: 40vh; height: 40vh;"
              [data]="pieChartData"
              [labels]="pieChartLabels"
              [chartType]="pieChartType"></canvas>
    </div>
    `,
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

    results: string[];

      constructor(private http: HttpClient){}

      ngOnInit(): void{
        this.http.get('https://lambrate-firebase-console.firebaseio.com/graph.json').subscribe(data => {
          this.results = data['results'];
        })
      }

  public pieChartLabels:string[] = ['Quote pagate', 'Quote mancanti'];
  public pieChartData:number[] = [400, 700];
  public pieChartType:string = 'pie';




  //events


}
