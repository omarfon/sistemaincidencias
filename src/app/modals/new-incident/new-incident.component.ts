import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateincidentService } from 'src/app/service/createincident.service';
import { DatanormalService } from 'src/app/service/datanormal.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.scss']
})
export class NewIncidentComponent implements OnInit {
  public tecnicos;
  public categorias;
  public usuarios;
  public tecnico;
  public valor;
  public incidenteForm: FormGroup;
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
      type: new FormControl(''),
      impact: new FormControl(''),
      mode: new FormControl(''),
      solicitante: new FormControl(''),
      state: new FormControl(''),
      urgency: new FormControl(''),
      tecnic: new FormControl(''),
      priority: new FormControl(''),
      category: new FormControl(''),
      datend: new FormControl(''),
      subcategory: new FormControl(''),
      hour: new FormControl(''),
      document: new FormControl(''),
      affair: new FormControl(''),
      hourCreate: new FormControl(''),
      description: new FormControl(''),
    })
  }

  saveInicident(){
    let datos = this.incidenteForm.value;
    datos.date = new Date;
    datos.tecnic = this.incidenteForm.value.tecnic;
    datos.sla = "4";
      this.createSrv.createNewIncident(datos).then(resp =>{
        console.log(resp);
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
      this.tecnicos.orderBy('nombres', 'desc');
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

  getAllSla(){

  }

  getAllUsers(){
    this.data.getAllUsers().subscribe(res =>{
      this.usuarios = res;
      console.log(this.usuarios);
    })
  }
 
  
}
