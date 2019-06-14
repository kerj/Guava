import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    GlobalNavComponent,
    UserNavComponent,
    UserProfileComponent,
    ProfileFeedComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
