import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabecera-user',
  templateUrl: './cabecera-user.component.html',
  styleUrls: ['./cabecera-user.component.scss']
})
export class CabeceraUserComponent implements OnInit {
  public tecnic;
  constructor(public router: Router) { 
    this.tecnic = JSON.parse(localStorage.getItem('datatecnic'));
  }

  ngOnInit() {
    this.tecnic = JSON.parse(localStorage.getItem('datatecnic'));
  }

  closeSesion(){
    console.log('cerrar sesion');
    this.router.navigate(['']);
    localStorage.clear(); 
  }

}
