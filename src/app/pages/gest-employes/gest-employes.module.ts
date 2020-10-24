import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestEmployesRoutingModule } from './gest-employes-routing.module';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { UpdateEmployesComponent } from './update-employes/update-employes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployesComponent, 
    ListEmployesComponent, 
    UpdateEmployesComponent],
  imports: [
    CommonModule,
    GestEmployesRoutingModule,
    FormsModule
  ]
})
export class GestEmployesModule { }
