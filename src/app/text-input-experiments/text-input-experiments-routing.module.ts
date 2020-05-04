import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextInputExperimentsComponent } from './text-input-experiments.component';

const routes: Routes = [{ path: '', component: TextInputExperimentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextInputExperimentsRoutingModule { }
