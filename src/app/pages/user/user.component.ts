import { Component, OnInit } from '@angular/core';
import { IncidentsService } from 'src/app/service/incidents.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public incidents
  constructor(public inciSrv: IncidentsService) { }

  ngOnInit() {
    this.getAllIncidents();
  }

  getAllIncidents(){
    this.incidents = localStorage.getItem('user');
    this.inciSrv.getAllIncidents().subscribe(data =>{
      this.incidents = data;
      console.log(this.incidents);
    })
  }

}
