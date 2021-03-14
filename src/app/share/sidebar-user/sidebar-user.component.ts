import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewIncidentUserComponent } from 'src/app/modals/new-incident-user/new-incident-user.component';


@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.scss']
})
export class SidebarUserComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openModalCreate(){
    this.dialog.open(NewIncidentUserComponent);
    console.log('open modal creacion');
  }


}
