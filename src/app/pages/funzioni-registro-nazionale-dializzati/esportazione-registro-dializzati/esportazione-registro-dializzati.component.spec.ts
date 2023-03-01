import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportazioneRegistroDializzatiComponent } from './esportazione-registro-dializzati.component';

describe('EsportazioneRegistroDializzatiComponent', () => {
  let component: EsportazioneRegistroDializzatiComponent;
  let fixture: ComponentFixture<EsportazioneRegistroDializzatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsportazioneRegistroDializzatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportazioneRegistroDializzatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
