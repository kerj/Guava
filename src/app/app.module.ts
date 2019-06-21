import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFeedComponent } from './profile-feed/profile-feed.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { routing } from './app-routing.module'

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
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
