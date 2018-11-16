import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomComponent } from './dom/dom.component';
import { ContainerComponent } from './container/container.component';
import { SubComponent } from './container/sub.component';
import { CelsiusComponent } from './celsius/celsius.component';

@NgModule({
  declarations: [
    ContainerComponent,
    SubComponent,
    DomComponent,
    CelsiusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    SubComponent,
    DomComponent
  ]
})
export class ExercisesModule { }
