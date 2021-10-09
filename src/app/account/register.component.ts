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
    filePath = ('C:\\server\\');


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
        
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required, Validators.maxLength(10)],
            lastName: ['', Validators.required, Validators.maxLength(10)],
            username: ['', Validators.required, Validators.maxLength(10)],
            password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(20)],
            email: ['', Validators.required, Validators.maxLength(15)],
            web: ['', Validators.required, Validators.maxLength(20)],
            city: ['', Validators.required, Validators.maxLength(15)],
            country: ['', Validators.required, Validators.maxLength(10)],
            profesion: ['', Validators.required, Validators.maxLength(20)],
            skills: ['', Validators.required, Validators.maxLength(100)],
            stacks: ['', Validators.required, Validators.maxLength(100)],
            birthdate: ['', Validators.required, Validators.maxLength(100)],
            jobseeker: ['', Validators.required, Validators.maxLength(10)],
            eosaccount: ['', Validators.minLength(12)],
            photo: ['', Validators.required,],
            gridCheck1: ['',Validators.required],
            gridCheck2: ['',Validators.required],
            jwtToken: ['',],
            token: ['',],

        });
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
        this.accountService.register(this.f.firstName.value, this.f.lastName.value, this.f.username.value, this.f.password.value, this.f.email.value, this.f.web.value,
            this.f.city.value, this.f.country.value, this.f.profesion.value, this.f.skills.value, this.f.stacks.value, this.f.birthdate.value, this.f.jobseeker.value, 
            this.f.eosaccount.value, this.f.photo.value, this.f.gridCheck1.value, this.f.gridCheck2.value) 

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

    

    onSelectFile(event) {

        
        if (event.target.files && event.target.files[0]) {

            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); 

            reader.onload = (event) => { // called once readAsDataURL is completed
                
                this.url = event.target.result;
                this.f.photo.value.get('photo').setValue({

                    filename: (<string|any>reader.result).split(',')[0], 
                })

            }

        }
    }
}


