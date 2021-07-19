import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorLoginComponent } from 'src/app/modals/error-login/error-login.component';
import { AuthService } from 'src/app/service/auth.service';
import { DatatecnicService } from 'src/app/service/datatecnic.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin : FormGroup;
  public usuario;
  public datatecnic;
  public dataUser;
  public loading: boolean = false;

  constructor(public router: Router,
              public authSrv: AuthService,
              public dateSrv: DatatecnicService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.formLogin = this.loginForm()
  }

  loginForm(){
    return new FormGroup({
      user: new FormControl(''),
      password: new FormControl('')
    })
  }

  goToHome(){
    
  }

  login(){
    this.loading = true;
    const datos = this.formLogin.value;
    this.authSrv.sigIn(datos.user, datos.password).then(resp =>{
      this.usuario = resp;
        localStorage.setItem('user',JSON.stringify(resp.user));
        this.getDataTecnic();
        console.log(this.usuario);
        
    }).catch(err =>{
      this.dialog.open(ErrorLoginComponent)
      console.log(err);
      this.loading = false;
    })
  }

  getDataTecnic(){
    this.dateSrv.getDataTecnic().subscribe(resp =>{
      this.datatecnic = resp;
      localStorage.setItem('datatecnic', JSON.stringify(this.datatecnic[0]));
      this.router.navigate(['home']);
      this.loading = false;
    });
  }

  getDataUser(){
    this.dateSrv.getDataUser().subscribe(resp => {
      this.dataUser = resp;
      console.log(this.dataUser);
      localStorage.setItem('dataUser', JSON.stringify(this.dataUser[0]));
      if(resp){
        this.router.navigate(['usuario']);
      }
    })
  }

  loginUser(){
    const datos = this.formLogin.value;
    this.authSrv.sigIn(datos.user, datos.password).then(resp =>{
      this.usuario = resp;
      if(resp.user){
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.getDataUser();
      }
    }).catch(err =>{
      console.log(err)
    })
  }

}
