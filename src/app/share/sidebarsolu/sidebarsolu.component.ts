import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewThemeComponent } from 'src/app/modals/new-theme/new-theme.component';

@Component({
  selector: 'app-sidebarsolu',
  templateUrl: './sidebarsolu.component.html',
  styleUrls: ['./sidebarsolu.component.scss']
})
export class SidebarsoluComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalNewThme(){
    this.dialog.open(NewThemeComponent)
  }

}
