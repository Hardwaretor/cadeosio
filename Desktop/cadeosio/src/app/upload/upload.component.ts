import { HttpClient, HttpEvent, HttpEventType, HttpResponse,  } from '@angular/common/http';
import { Component, OnInit, ElementRef, HostListener, Input,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { requiredFileType } from './upload-file-validators';
import { AccountService } from '@app/_services';
import { User } from '@app/_models';
import { File } from '@app/_models';
import { Project } from '@app/_models';
import { Part } from '@app/_models';
import { Image } from '@app/_models';

export function uploadProgress<T>( cb: ( progress: number ) => void ) {
  return tap(( event: HttpEvent<T> ) => {
    if ( event.type === HttpEventType.UploadProgress ) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  user: User;
  file: File;
  project: Project;
  part: Part;
  image: Image;

  @Input() progress = 0;
  onChange: Function;

  upload = new FormGroup({

    user_id: new FormControl([Validators.required,]),
    file: new FormControl( [Validators.required, requiredFileType('')]),
    part_id: new FormControl([Validators.required]),

  });
  success = false;

  constructor( private http: HttpClient, private host: ElementRef<HTMLInputElement>, private accountService: AccountService ) {
    this.user = this.accountService.userValue;
    this.file = this.accountService.fileValue;
    this.project = this.accountService.projectValue;
  }

  submit() {

    this.http.post('http://localhost:4001/files',(this.upload.value), {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      uploadProgress(progress => (this.progress = progress)),
      toResponseBody()
    ).subscribe(res => {
      this.progress = 0;
      this.success = true;
      this.upload.reset();
    });
  }

  hasError( field: string, error: string ) {
    const control = this.upload.get(field);
    return control.dirty && control.hasError(error);
  }

  ngOnInit(): void {
  } 

}


