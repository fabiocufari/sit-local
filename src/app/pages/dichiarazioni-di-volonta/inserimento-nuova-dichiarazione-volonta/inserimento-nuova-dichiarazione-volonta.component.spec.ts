import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoNuovaDichiarazioneVolontaComponent } from './inserimento-nuova-dichiarazione-volonta.component';

describe('InserimentoNuovaDichiarazioneVolontaComponent', () => {
  let component: InserimentoNuovaDichiarazioneVolontaComponent;
  let fixture: ComponentFixture<InserimentoNuovaDichiarazioneVolontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoNuovaDichiarazioneVolontaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoNuovaDichiarazioneVolontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
