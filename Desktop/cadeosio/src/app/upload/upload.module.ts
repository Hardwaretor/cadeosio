import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [UploadComponent, FileUploadComponent, ProgressComponent,],
  imports: [
    BrowserModule,
    UploadRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UploadComponent]
})
export class UploadModule {}
