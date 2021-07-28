import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserGithubProfile } from 'src/app/models/user-github-profile';
import { UserGithubService } from 'src/app/services/user-github.service';

@Component({
  selector: 'app-user-github-profile',
  templateUrl: './user-github-profile.component.html',
  styleUrls: ['./user-github-profile.component.css']
})
export class UserGithubProfileComponent implements OnInit {
public userProfile: any
public repos:any
public publicEvents:any
  constructor(
    private activateRoute:ActivatedRoute,
    private userService:UserGithubService
  ) { }

  ngOnInit(): void {
    this.getUsername()
  }
  getUsername(){
    let username= this.activateRoute.snapshot.params.user
    this.userService.getUserData(username).subscribe((res)=>{
      this.userProfile=res
      this.userService.getUserEvents(res.repos_url).subscribe((res)=>{
        this.repos=res
      })
      this.userService.getUserEvents(res.received_events_url).subscribe((res)=>{
        this.publicEvents=res
      })
    })
  }
}
