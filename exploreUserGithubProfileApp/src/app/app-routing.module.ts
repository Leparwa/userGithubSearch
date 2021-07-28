import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserGithubProfileComponent } from './components/user-github-profile/user-github-profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchUserComponent
  },
  {
    path:'user-profile/:user',
    component:UserGithubProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
