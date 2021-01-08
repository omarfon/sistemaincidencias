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
    const storage = localStorage.getItem('datatecnic');
    if(storage){
      this.tecnic = JSON.parse(storage);
    }
  }

  ngOnInit() {
  }

  closeSesion(){
    console.log('cerrar sesion');
    this.router.navigate(['']);
    localStorage.clear(); 
  }

}
