import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-acquisizione-dati-registro-regionale',
  templateUrl: './acquisizione-dati-registro-regionale.component.html',
  styleUrls: ['./acquisizione-dati-registro-regionale.component.scss']
})
export class AcquisizioneDatiRegistroRegionaleComponent implements OnInit {
  isDisabled = true;
  uploadForm = this.fb.group({
    uploadDatiAnagrafici: ['',Validators.required],
    uploadDatiComorbidita: ['',Validators.required],
    uploadDatiEventi: ['',Validators.required],
  });


  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    console.log()
  }

  onPhotoUploaded() {
    this.isDisabled = false;
    console.log("onPhotoUpdated")
  }

  caricaFoto() {
    this.onPhotoUploaded();
    console.log("caricaFoto")
  }
}
