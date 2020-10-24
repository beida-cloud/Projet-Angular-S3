import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotifPrimaryComponent } from './notif-primary/notif-primary.component';
import { DangerPrimaryComponent } from './danger-primary/danger-primary.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    SidebarComponent, 
    NotifPrimaryComponent,
    DangerPrimaryComponent],
  imports: [
    CommonModule
  ],
  exports : [
    NavbarComponent, 
    SidebarComponent, 
    NotifPrimaryComponent
  ]
  
})
export class ComponentsModule { }
