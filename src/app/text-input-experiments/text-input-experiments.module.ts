import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextInputExperimentsRoutingModule } from './text-input-experiments-routing.module';
import { TextInputExperimentsComponent } from './text-input-experiments.component';


@NgModule({
  declarations: [TextInputExperimentsComponent],
  imports: [
    CommonModule,
    TextInputExperimentsRoutingModule
  ]
})
export class TextInputExperimentsModule { }
