import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentUserComponent } from './new-incident-user.component';

describe('NewIncidentUserComponent', () => {
  let component: NewIncidentUserComponent;
  let fixture: ComponentFixture<NewIncidentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIncidentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
