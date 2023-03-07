import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderComponent } from './components/loader/loader.component';
import {LoaderService} from './components/loader/loader.service';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { CustomUploadComponent } from './components/custom-upload/custom-upload.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { IconComponent } from './components/icon/icon.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { ReactiveFormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ModalComponent,
    CustomCardComponent,
    CustomUploadComponent,
    TitleSectionComponent,
    SearchBoxComponent,
    IconComponent,
    CustomTableComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ModalComponent,
    CustomCardComponent,
    CustomUploadComponent,
    TitleSectionComponent,
    SearchBoxComponent,
    IconComponent,
    CustomTableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    LoaderService,
    ModalService
  ],
})
export class SharedModule { }
