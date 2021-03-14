import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  public tecnic;
  constructor(public router: Router) {
   }

  ngOnInit() {
    const storage = localStorage.getItem('datatecnic');
    if(storage){
      this.tecnic = JSON.parse(storage);
    }
  }

  closeSesion(){
    console.log('cerrar sesion');
    this.router.navigate(['']);
    localStorage.clear(); 
  }
}
