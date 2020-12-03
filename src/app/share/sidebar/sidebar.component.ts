import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewIncidentComponent } from 'src/app/modals/new-incident/new-incident.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalCreate(){
    this.dialog.open(NewIncidentComponent);
    console.log('open modal creacion');
  }

}
