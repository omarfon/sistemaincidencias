import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CreateincidentService } from 'src/app/service/createincident.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-incident-user',
  templateUrl: './new-incident-user.component.html',
  styleUrls: ['./new-incident-user.component.scss']
})
export class NewIncidentUserComponent implements OnInit {
  public incidenteForm: FormGroup;
  constructor(public createSrv: CreateincidentService,
              public dialogref: MatDialogRef<NewIncidentUserComponent>) { }

  ngOnInit() {
  }

  createForm(){
    return new FormGroup({
    /*   type: new FormControl(''),
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
      hour: new FormControl(''), */
      document: new FormControl(''),
      affair: new FormControl(''),
      description: new FormControl(''),
    })
  }

  saveInicident(){
    const solicitante = JSON.stringify(localStorage.getItem('datatecnic'))
    let datos = this.incidenteForm.value;
    datos.date = new Date;
    /* datos.tecnic = this.incidenteForm.value.tecnic; */
    datos.solicitante = solicitante;
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


}
