import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password }, { withCredentials: true })
            .pipe(map(user => {
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        this.http.post<any>(`${environment.apiUrl}/users/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/users/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                this.userSubject.next(user);
                return user;
            }));
    }
    

    // helper methods

    private refreshTokenTimeout;


    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
    
}
