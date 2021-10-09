import { Component,OnInit  } from '@angular/core';
import { User } from './_models';
import { AuthenticationService } from './_services';



@Component({ 
    
selector: 'app-root',
templateUrl: './app.component.html',

})


export class AppComponent implements OnInit{
    user: User;

    

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    

    logout() {
        this.authenticationService.logout();
    }

    ngOnInit(): void {
    } 

}
