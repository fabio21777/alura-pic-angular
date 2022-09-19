import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuardService } from './core/auth/authGuard.service';
import { SigupComponent } from './home/sigup/sigup.component';

const routes: Routes = [
  { path: 'user/:userName',
    component: PhotoListComponent, 
    resolve: { photos: PhotoListResolver } },

  { path: 'p/add', 
    component: PhotoFormComponent },
  { path: '',
     component: SigninComponent ,
     canActivate: [AuthGuardService] },

  {
    path: 'sigup',
    component: SigupComponent
  },
  { path: '**', 
    component:  NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
