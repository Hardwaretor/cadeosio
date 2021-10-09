import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('/users')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string,) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password, })
            .pipe(tap(ref => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(ref));
                this.userSubject.next(ref);
                return ref;
            }));
            
    }

    register( firstName: string, lastName: string, username: string, password: string, email: string, web: string, city: string,
        country: string, profesion: string, skills: string, stacks: string, birthdate: string, jobseeker: string, eosaccount: string,
        photo: string|any, gridCheck1: false, gridCheck2: false) {

        return this.http.post<User>(`${environment.apiUrl}/users/register`, {firstName, lastName, username, password,  email, web, city,
            country, profesion, skills, stacks, birthdate, jobseeker, eosaccount, photo, gridCheck1, gridCheck2})
            .pipe(tap(ref => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('', JSON.stringify(ref));
                this.userSubject.next(ref);
                return ref;
            }));
      }


    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user',);
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }


    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}