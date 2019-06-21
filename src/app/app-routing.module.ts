import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const appRoutes: Routes = [
  {
  path: 'login',
  component: UserLoginComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
  




