import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import {  repo, UserGithubProfile } from '../models/user-github-profile';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserGithubService {
  baseUrl="https://api.github.com"
  constructor(
    private http:HttpClient,
    private toastr: ToastrService
    ) { }


  getUserData(uName:string):Observable<UserGithubProfile>{
    return this.http.get<any>(
      `${this.baseUrl}/users/${uName}`
    )
  }
  getUserEvents(eventsLink:string){
    return this.http.get(
      `${eventsLink}`
    )
  }
  getUserRepos(repoLink:string):Observable<repo>{
    return this.http.get<any>(
      `${repoLink}`
    )
  }
  searchUser(userName: string){
    userName = userName.trim();
    const searchUrl = `${this.baseUrl}/users/${userName}`;
    return this.http.jsonp<any>(searchUrl,'callback').pipe(
    
      
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
