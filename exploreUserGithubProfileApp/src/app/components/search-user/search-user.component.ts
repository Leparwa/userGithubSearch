import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  UserGithubProfile } from 'src/app/models/user-github-profile';
import { UserGithubService } from 'src/app/services/user-github.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
buttonName:string='search'
gitHubUserNameForm = new FormGroup({
  githubUserName: new FormControl(''),
  
});
  constructor(
    private route:Router,
    private searchUserService:UserGithubService
  ) { }

  ngOnInit(): void {
  }

  searchUser(){
    this.buttonName='Searching'
    let uName= this.gitHubUserNameForm.value.githubUserName
      this.searchUserService.searchUser(uName).subscribe(
      (res)=>{
       if(res.meta.status==200){
        this.route.navigateByUrl(`user-profile/${res.data.login}`)
       }
       else if(res.meta.status===404){
         alert("user not found enter correct username")
         this.buttonName='Search'
       }
    },
   
    )
    // this.route.navigateByUrl('user-profile')
  }
}
