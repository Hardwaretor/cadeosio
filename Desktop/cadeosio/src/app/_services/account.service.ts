import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { File } from '@app/_models';
import { Project } from '@app/_models';
import { Part } from '@app/_models';
import { Image } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    private fileSubject: BehaviorSubject<File>;
    public file: Observable<File>;

    private projectSubject: BehaviorSubject<Project>;
    public project: Observable<Project>;

    private partSubject: BehaviorSubject<Part>;
    public part: Observable<Part>;

    private imageSubject: BehaviorSubject<Image>;
    public image: Observable<Image>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();

        this.fileSubject = new BehaviorSubject<File>(JSON.parse(localStorage.getItem('file')));
        this.file = this.fileSubject.asObservable();

        this.projectSubject = new BehaviorSubject<Project>(JSON.parse(localStorage.getItem('project')));
        this.project = this.projectSubject.asObservable();

        this.partSubject = new BehaviorSubject<Part>(JSON.parse(localStorage.getItem('part')));
        this.part = this.partSubject.asObservable();

        this.imageSubject = new BehaviorSubject<Image>(JSON.parse(localStorage.getItem('image')));
        this.image = this.imageSubject.asObservable();

    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public get fileValue(): File {
        return this.fileSubject.value;
    }

    public get projectValue(): Project {
        return this.projectSubject.value;
    }

    public get parttValue(): Part{
        return this.partSubject.value;
    }

    public get imagetValue(): Image{
        return this.imageSubject.value;
    }
    

    login(username: string, password: string,) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password, })
            .pipe(tap(ref => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(ref));

                this.userSubject.next(ref);
                return ref;
            }))
            
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user',);
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    register(user: User) {
        
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    upload(file: string|any) {
        return this.http.post(`${environment.apiUrl}/files`, file);
        
    }

    newproject(project: Project) {
        return this.http.post(`${environment.apiUrl}/projects`, project);
    }

    newpart(part: Part) {
        return this.http.post(`${environment.apiUrl}/parts`, part);
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