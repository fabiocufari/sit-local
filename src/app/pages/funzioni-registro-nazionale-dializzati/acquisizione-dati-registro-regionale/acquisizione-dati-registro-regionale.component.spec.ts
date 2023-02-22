import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisizioneDatiRegistroRegionaleComponent } from './acquisizione-dati-registro-regionale.component';

describe('AcquisizioneDatiRegistroRegionaleComponent', () => {
  let component: AcquisizioneDatiRegistroRegionaleComponent;
  let fixture: ComponentFixture<AcquisizioneDatiRegistroRegionaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquisizioneDatiRegistroRegionaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisizioneDatiRegistroRegionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
