import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
  path: 'login',
  component: UserLoginComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
  




