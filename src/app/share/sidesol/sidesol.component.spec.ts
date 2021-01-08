import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesolComponent } from './sidesol.component';

describe('SidesolComponent', () => {
  let component: SidesolComponent;
  let fixture: ComponentFixture<SidesolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
