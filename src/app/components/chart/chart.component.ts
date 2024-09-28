import { Component } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
    DataRecords: any = [];
    constructor(private service: ChartService){}

    ngOnInit(){
        this.service.GetDataCharts().subscribe(data => {
          this.DataRecords = data;
        })
    }
}
