import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateincidentService } from 'src/app/service/createincident.service';
import { DatanormalService } from 'src/app/service/datanormal.service';
import { IncidentsService } from 'src/app/service/incidents.service';
import Swal from 'sweetalert2'
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public incidente;
  public incidencias: any[];
  public _incidencias: any[];
  public tecnico;
  public tecnicos;
  public categorias;
  public _categorias;
  public usuarios;
  public filter;
  public incidenteForm: FormGroup;
  p: number = 1;
  public subcategory : any[] = [];
  public _subcategory : any[] = [];
  public incidencia;
  public tarea;
  public tareas;
  public sla;
  public typeUser;
  public fechaDeCreacion;
  public finalizado;
  public fechaDeVencimiento;
  public minutos;

  constructor(public incidentSrv: IncidentsService,
              public data: DatanormalService,
              public createInSrv: CreateincidentService) {
                this.getAllTecnics();
                this.getAllIncidents();
                this.GetAllCategories();
                this.incidenteForm = this.createForm();
                if(localStorage.getItem('type')){
                  const typeUser = JSON.parse(localStorage.getItem('type'));
                  this.typeUser = typeUser;
                  console.log(this.typeUser); 
                }
               }

            
  ngOnInit() {
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
          console.log(data);
          this.incidencias = data.filter(x => x.data.state == "abierta")
          console.log(this.incidencias)
        })
      }
  }

  
    createForm(){
     
        return new FormGroup({
          type: new FormControl(''),
          impact: new FormControl(''),
          mode: new FormControl(''),
          solicitante: new FormControl(''),
          state: new FormControl(''),
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
          description: new FormControl(''),
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

  getAllTecnics(){
    this.data.getAllTecnics().subscribe(res =>{
      this.tecnicos = res;
      /* console.log(this.tecnicos); */
    })
  }

  GetAllCategories(){
    this.data.getAllCategiories().subscribe(res =>{
      this._categorias = res;
      this.categorias = this._categorias;
      /* console.log('this._categorias',this._categorias); */
    })
  }

  getAllUsers(){
    this.data.getAllUsers().subscribe(res =>{
      this.usuarios = res;
     /*  console.log(this.usuarios); */
    })
  }

  saveIncident(i){
    this.incidente = i.id;
    /* console.log(this.incidente); */
  }

  getCategorieData(event){
    const value = event.target.selectedOptions[0].textContent.trim();
   /*  console.log(value); */
    const data = this._categorias.filter(x => x.name === value);
    this._subcategory = data[0].utilidades;
    this.subcategory = this._subcategory;
  }

  saveSubcategory(event){
    const sla = event.target.selectedOptions[0].textContent.trim();
    this.sla = this._subcategory.filter(x => x.name === sla);
    this.minutos = this.sla[0].subnivel[0].sla;
    const actual = moment().hour;
    this.finalizado = moment().add(this.minutos, 'minutes').format('h:mm A');
    this.fechaDeCreacion = moment().format('dddd D MMMM')
    this.fechaDeVencimiento = moment().add(this.minutos, 'minutes').format('dddd D MMMM')
    console.log(this.finalizado, this.fechaDeVencimiento);
  }

  saveInicident(){
    let datos = this.incidenteForm.value;
    datos.tecnic = this.incidenteForm.value.tecnic;
    datos.datend= this.fechaDeVencimiento;
    datos.hourVencimiento = this.finalizado;
    datos.tecnic = this.incidenteForm.value.tecnic;
    datos.sla = this.minutos;
      this.createInSrv.updateInciden(this.incidente, datos).then(resp =>{
        console.log(resp);
        Swal.fire('Data Actualizada...', 'Listo... acabas de actualizar una nueva incidencia!', 'success');
      }).catch(err =>{
        Swal.fire('Data No guardada...', 'Error... No se ha podido actualizar esta inicidencia!', 'error');
        console.log(err)
      })
  } 

  updateStatus(){
    
  }

  saveTarea(id, tarea){
    console.log(id, tarea)
  }

  busquedaIncidencia(){
    console.log(this.incidencia);
    this._incidencias = this.incidencias.filter(x => x.data.description == 'this.incidencia');
    console.log(this._incidencias);
  }

}
