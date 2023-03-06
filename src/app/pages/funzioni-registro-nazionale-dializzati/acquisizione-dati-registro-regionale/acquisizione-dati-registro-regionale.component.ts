import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acquisizione-dati-registro-regionale',
  templateUrl: './acquisizione-dati-registro-regionale.component.html',
  styleUrls: ['./acquisizione-dati-registro-regionale.component.scss']
})
export class AcquisizioneDatiRegistroRegionaleComponent implements OnInit {
  isDisabled = true;

  constructor() { }

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
