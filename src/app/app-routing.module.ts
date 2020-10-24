import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path: 'auth' , component: AuthComponent},
  {path: 'admin' , component: AdminComponent,
  canActivate: [AuthGuardGuard],
  children: [{
    path:'',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule )
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
