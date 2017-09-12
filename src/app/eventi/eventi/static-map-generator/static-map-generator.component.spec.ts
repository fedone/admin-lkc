import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMapGeneratorComponent } from './static-map-generator.component';

describe('StaticMapGeneratorComponent', () => {
  let component: StaticMapGeneratorComponent;
  let fixture: ComponentFixture<StaticMapGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMapGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticMapGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
