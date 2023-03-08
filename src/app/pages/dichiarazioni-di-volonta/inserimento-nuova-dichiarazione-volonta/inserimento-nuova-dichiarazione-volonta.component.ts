import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserimento-nuova-dichiarazione-volonta',
  templateUrl: './inserimento-nuova-dichiarazione-volonta.component.html',
  styleUrls: ['./inserimento-nuova-dichiarazione-volonta.component.scss']
})
export class InserimentoNuovaDichiarazioneVolontaComponent {

  insertNewDeclarationForm = this.fb.group({
    codiceFiscale:['',Validators.required],
    nome:['',Validators.required],
    cognome:['',Validators.required],
    sesso:['',Validators.required],
    dataNascita:['',Validators.required],
    nazioneNascita:['',Validators.required],
    provinciaNascita:['',Validators.required],
    comuneNascita:['',Validators.required],
    indirizzoResidenza:['',Validators.required],
    cap:['',Validators.required],
    provinciaResidenza:['',Validators.required],
    comuneResidenza:['',Validators.required],

  })

  constructor(private fb :FormBuilder) { }


}
