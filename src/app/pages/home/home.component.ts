import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatanormalService } from 'src/app/service/datanormal.service';
import { IncidentsService } from 'src/app/service/incidents.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public incidencias;
  public tecnicos;
  public categorias;
  public usuarios;
  public incidenteForm: FormGroup;

  constructor(public incidentSrv: IncidentsService,
              public data: DatanormalService) {

                this.getAllIncidents();
                this.incidenteForm = this.createForm();
               }

            
  ngOnInit() {
    console.log(this.tecnic);
    this.getAllIncidents();
  }

  getAllIncidents(){
    const data = localStorage.getItem('datatecnic');
    const user = JSON.parse(data)
    if(user.type == 'admin'){
    this.incidentSrv.getAllIncidets().subscribe(data =>{
      console.log(data)
        this.incidencias = data;
      });
        console.log(this.incidencias)
      }else{
        this.incidentSrv.getAllIncidetsPerUser().subscribe((data:any) => {
          console.log(data)
          this.incidencias = data.filter(x => x.data.state == "abierta")
          console.log(this.incidencias)
        })
      }
  }

  createForm(){
    return new FormGroup({
      type: new FormControl('', [Validators.required]),
      impact: new FormControl('', [Validators.required]),
      mode: new FormControl('', [Validators.required]),
      solicitante: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      urgency: new FormControl(''),
      tecnic: new FormControl('', [Validators.required]),
      priority: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      datend: new FormControl(''),
      subcategory: new FormControl(''),
      hour: new FormControl(''),
      document: new FormControl(''),
      affair: new FormControl(''),
      hourCreate: new FormControl(''),
      description: new FormControl('', [Validators.required]),
    })
  }

  get type(){
    return this.incidenteForm.get('type')
  }

  get impact(){
    return this.incidenteForm.get('impact')
  }

  get mode(){
    return this.incidenteForm.get('mode')
  }

  get state(){
    return this.incidenteForm.get('state')
  }

  get tecnic(){
    return this.incidenteForm.get('tecnic')
  }

  get category(){
    return this.incidenteForm.get('category')
  }

  get solicitante(){
    return this.incidenteForm.get('solicitante')
  }

  get description(){
    return this.incidenteForm.get('description')
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
