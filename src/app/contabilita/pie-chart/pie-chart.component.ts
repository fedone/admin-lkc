import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'pie-chart',
  template: ` 
  	<div style="display: block">
      <canvas baseChart style="position: relative; width: 40vh; height: 40vh;"
              [data]="pieChartData"
              [labels]="pieChartLabels"
              [chartType]="pieChartType"
              (chartHover)="chartHovered($event)"
              (chartClick)="chartClicked($event)"></canvas>
    </div>
    `,
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  public pieChartLabels:string[] = ['Quote pagate', 'Quote mancanti'];
  public pieChartData:number[] = [400, 700];
  public pieChartType:string = 'pie';




  //events

  public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }
}
