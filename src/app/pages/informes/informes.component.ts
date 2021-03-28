import { Component, OnInit } from '@angular/core';
import { IncidentsService } from 'src/app/service/incidents.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {
  public totalIncidents;
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true,
    fill: false
};
  public barChartLabels:string[] = ['mes 0','mes 1', 'mes 2', 'mes 3', 'mes 4', 'mes 5', 'mes 6', 'mes 7', 'mes 8', 'mes 9', 'mes 10', 'mes 11', 'mes 12', 'mes 13', 'mes 14', 'mes 15','mes 16', 'mes 17'];
  public barChartLabelsDays:string[] = ['1','2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15','16', '17','18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  public barChartDataPeso:any[] = [];
  public lineChartType:string = 'line';
  public barChartLegend:boolean = true; 
  public barChartColorsPeso = [
   { // roja
     backgroundColor: 'transparent',
     borderColor: '#f14668',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgba(148,159,177,0.3)',
     borderDash: [4,1],
     pointBorderWidth: .4,
     /* borderDashOffset: 2, */
   },
   { // naranja
     backgroundColor: 'transparent',
     borderColor: '#f5c0c0',
     borderDash: [4,2],
     pointBorderWidth: .4,
   },
   { // amarilla
     backgroundColor: 'transparent',
     borderColor: '#fff9b0',
     borderDash: [4,2],
     pointBorderWidth: .4,
   },
   { // verde
     backgroundColor: 'transparent',
     borderColor: '#6ddccf',
     borderDash: [4,2],
     pointBorderWidth: .4,
   },
   { // azul
     backgroundColor: 'transparent',
     borderColor: '#9ab3f5',
     borderDash: [4,2],
     pointBorderWidth: .4,
   },
   { // principal
     backgroundColor: 'rgba(15,48,87,0.5)', 
     borderColor: '#0f3057',
     pointBorderWidth: .4,
   },
 ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  constructor(public incidentsSrv: IncidentsService) { }

  ngOnInit() {
    this.getAllIncidents();
  }


  getAllIncidents(){
    this.incidentsSrv.getAllIncidets().subscribe(data =>{
      console.log(data);
      this.totalIncidents = data.length;
      console.log(this.totalIncidents)
      this.barChartDataPeso = [{data: [this.totalIncidents], label:'Incidencias'}] 
      console.log('data peso:',this.barChartDataPeso);
    })
  }
}
