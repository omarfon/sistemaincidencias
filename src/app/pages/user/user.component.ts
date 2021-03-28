import { Component, OnInit } from '@angular/core';
import { IncidentsService } from 'src/app/service/incidents.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public incidents
  public user;
  constructor(public inciSrv: IncidentsService) { }

  ngOnInit() {
    this.getAllIncidents();
  }

  getAllIncidents(){
  this.user = localStorage.getItem('user');
    this.inciSrv.getAllIncidents().subscribe(data =>{
      this.incidents = data;
      console.log(this.incidents);
    })
  }

}
