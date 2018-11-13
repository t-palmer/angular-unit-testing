import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomComponent } from './dom/dom.component';

@NgModule({
  declarations: [
    DomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomComponent
  ]
})
export class ExercisesModule { }
