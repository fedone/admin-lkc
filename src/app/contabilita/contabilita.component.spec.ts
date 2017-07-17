import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabilitaComponent } from './contabilita.component';

describe('ContabilitaComponent', () => {
  let component: ContabilitaComponent;
  let fixture: ComponentFixture<ContabilitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabilitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
