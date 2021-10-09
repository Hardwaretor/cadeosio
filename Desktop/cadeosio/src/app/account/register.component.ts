import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    url: string | ArrayBuffer;
    returnUrl: string;



    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,

        
    ) { }

    ngOnInit() {


        this.registerForm = this.formBuilder.group({
            firstName: [null, Validators.required, Validators.maxLength(10)],
            lastName: [null, Validators.required, Validators.maxLength(10)],
            username: [null, Validators.required, Validators.maxLength(10)],
            password: [null, Validators.required, Validators.minLength(6), Validators.maxLength(20)],
            email: [null, Validators.required, Validators.maxLength(15)],
            web: [null, Validators.required, Validators.maxLength(20)],
            city: [null, Validators.required, Validators.maxLength(15)],
            country: [null, Validators.required, Validators.maxLength(10)],
            profesion: [null, Validators.required, Validators.maxLength(20)],
            skills: [null, Validators.required, Validators.maxLength(100)],
            stacks: [null, Validators.required, Validators.maxLength(100)],
            birthdate: [null, Validators.required, Validators.maxLength(100)],
            jobseeker: [null, Validators.required, Validators.maxLength(10)],
            eosaccount: [null, Validators.minLength(12)],
            photo: [null, Validators.required,],
            gridCheck1: [null,Validators.required],
            gridCheck2: [null,Validators.required],
        });

               // get return url from route parameters or default to '/'
               this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['./home'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


    }

    
    private imageSrc: string = '';

    handleInputChange(e) {
      var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
      file = file[0].getAsDataURL();
    }
    _handleReaderLoaded(e) {
      let reader = e.target;
      this.imageSrc = reader.result;
      this.url = reader.result;
      console.log(this.imageSrc)
    }
    
}




