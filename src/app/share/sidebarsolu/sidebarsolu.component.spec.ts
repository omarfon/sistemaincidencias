import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsoluComponent } from './sidebarsolu.component';

describe('SidebarsoluComponent', () => {
  let component: SidebarsoluComponent;
  let fixture: ComponentFixture<SidebarsoluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarsoluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarsoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
