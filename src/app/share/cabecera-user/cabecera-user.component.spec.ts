import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraUserComponent } from './cabecera-user.component';

describe('CabeceraUserComponent', () => {
  let component: CabeceraUserComponent;
  let fixture: ComponentFixture<CabeceraUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
