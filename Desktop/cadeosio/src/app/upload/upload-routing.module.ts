import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
      path: '', component: UploadComponent,
      children: [
          { path: 'file-upload', component: FileUploadComponent },
          { path: 'progress', component: ProgressComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }


