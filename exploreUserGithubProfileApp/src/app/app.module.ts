import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserGithubProfileComponent } from './components/user-github-profile/user-github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserGithubProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
