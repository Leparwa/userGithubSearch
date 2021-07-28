import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  UserGithubProfile } from '../models/user-github-profile';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  constructor(
    private http:HttpClient,
    private toastr: ToastrService
    ) { }


  getUserData(uName:string):Observable<UserGithubProfile>{
    return this.http.get<UserGithubProfile>(
      `${environment.url}/users/${uName}`
    )
  }
  getUserEvents(eventsLink:string){
    return this.http.get(
      `${eventsLink}`
    )
  }
  getUserRepos(repoLink:string){
    return this.http.get(
      `${repoLink}`
    )
  }
  searchUser(userName: string){
    userName = userName.trim();
    const searchUrl = `${environment.url}/users/${userName}`;
    return this.http.jsonp<any>(searchUrl,'callback').pipe(
      tap(
        data => console.log(data),
        error => console.log(error)
      )
    )
  }
  
  triggerToast(type:string, message:string) {
    if (type === 'success') {
      this.toastr.success(message);
    } else if (type === 'info') {
      this.toastr.info(message);
    } else if (type === 'warning') {
      this.toastr.warning(message);
    } else if (type === 'error') {
      this.toastr.error(message);
    }
  }
}
