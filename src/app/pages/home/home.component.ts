import { Component, OnInit } from '@angular/core';
import { IncidentsService } from 'src/app/service/incidents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public incidencias;

  constructor(public incidentSrv: IncidentsService) { }

  ngOnInit() {
    this.getAllIncidents();
  }

  getAllIncidents(){
    this.incidentSrv.getAllIncidets().subscribe(data =>{
      this.incidencias = data;
      console.log(data)
    })
  }

}
