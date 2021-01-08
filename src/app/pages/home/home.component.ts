import { Component, OnInit } from '@angular/core';
import { DatanormalService } from 'src/app/service/datanormal.service';
import { IncidentsService } from 'src/app/service/incidents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public incidencias;
  public tecnic;
  public tecnicos;
  public categorias;
  public usuarios;

  constructor(public incidentSrv: IncidentsService,
              public data: DatanormalService) { }

  ngOnInit() {
    console.log(this.tecnic);
    this.getAllIncidents();
  }

  getAllIncidents(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data)
    if(user.id == '00'){
    this.incidentSrv.getAllIncidets().subscribe(data =>{
        this.incidencias = data;
      });
        console.log(this.incidencias)
      }else{
        this.incidentSrv.getAllIncidetsPerUser().subscribe(data => {
          this.incidencias = data
        })
      }
  }

 /*  getAllTecnics(){
    this.data.getAllTecnics().subscribe(res =>{
      this.tecnicos = res;
      console.log(this.tecnicos);
    })
  }

  GetAllCategories(){
    this.data.getAllCategiories().subscribe(res =>{
      this.categorias = res.map(d =>{
        return{
          id: d.payload.doc.id,
          data: d.payload.doc.data()
        }
      })
      console.log(this.categorias);
    })
  }

  getAllUsers(){
    this.data.getAllUsers().subscribe(res =>{
      this.usuarios = res;
      console.log(this.usuarios);
    })
  } */

}
