import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateincidentService } from 'src/app/service/createincident.service';
import { DatanormalService } from 'src/app/service/datanormal.service';
import Swal from 'sweetalert2'
import * as moment from 'moment';
moment.locale('es');
@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.scss']
})
export class NewIncidentComponent implements OnInit {
  public tecnicos;
  public categorias;
  public _categorias;
  public usuarios;
  public tecnico;
  public valor;
  public subcategory: any[] = [];
  public _subcategory: any[] = [];
  public sla :any = "";
  public minutos;
  public incidenteForm: FormGroup;
  public finalizado;
  public fechaDeVencimiento;
  public fechaDeCreacion;
  public affair = "";
  constructor(public data: DatanormalService, 
    public createSrv:CreateincidentService,
    public dialogref: MatDialogRef<NewIncidentComponent>) { }

  ngOnInit() {
    this.getAllTecnics();
    this.GetAllCategories();
    this.getAllUsers();
    this.incidenteForm = this.createForm();
  }

  createForm(){
    return new FormGroup({
      type: new FormControl('', [Validators.required]),
      impact: new FormControl('', [Validators.required]),
      mode: new FormControl('', [Validators.required]),
      solicitante: new FormControl('', [Validators.required]),
      state: new FormControl('abierta', [Validators.required]),
      urgency: new FormControl(''),
      tecnic: new FormControl('', [Validators.required]),
      priority: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      datend: new FormControl(''),
      subcategory: new FormControl(''),
      hourCreate: new FormControl(''),
      hourVencimiento: new FormControl(''),
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


  saveInicident(){
    let datos = this.incidenteForm.value;
    console.log('datos:', datos);
    datos.datend= this.fechaDeVencimiento;
    datos.hourVencimiento = this.finalizado;
    datos.tecnic = this.incidenteForm.value.tecnic;
    datos.sla = this.minutos;
    console.log('datos',datos);
      this.createSrv.createNewIncident(datos).then(resp =>{
        console.log(datos,resp);
        this.dialogref.close();
        Swal.fire('Data Guardada...', 'Listo... acabas de guardar una nueva incidencia!', 'success');
      }).catch(err =>{
        Swal.fire('Data No guardada...', 'Error... No se ha podido guardar esta inicidencia!', 'error');
        console.log(err)
      })
  }


  closeModal(){
    this.dialogref.close();
  }

  getTecnic(){
    const tecnic = this.incidenteForm.get('tecnic');
    console.log(tecnic);
    return this.incidenteForm.get('tecnic');
  }

  getAllTecnics(){
    this.data.getAllTecnics().subscribe((res:any) =>{
      this.tecnicos = res;
      console.log(this.tecnicos);
    })
  }

  GetAllCategories(){
    this.data.getAllCategiories().subscribe(res =>{
      this._categorias = res;
      this.categorias = this._categorias;
      /* console.log(this.categorias); */
    })
  }

  getCategorieData(event){
    this.minutos = "";
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

  getAllUsers(){
    this.data.getAllUsers().subscribe(res =>{
      this.usuarios = res;
      console.log(this.usuarios);
    })
  }
 
  
}
