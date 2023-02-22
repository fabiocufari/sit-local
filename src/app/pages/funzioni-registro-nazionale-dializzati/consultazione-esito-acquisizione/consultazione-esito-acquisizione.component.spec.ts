import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultazioneEsitoAcquisizioneComponent } from './consultazione-esito-acquisizione.component';

describe('ConsultazioneEsitoAcquisizioneComponent', () => {
  let component: ConsultazioneEsitoAcquisizioneComponent;
  let fixture: ComponentFixture<ConsultazioneEsitoAcquisizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultazioneEsitoAcquisizioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultazioneEsitoAcquisizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
