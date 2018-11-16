import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider/provider.component';
import { BlankComponent } from './blank/blank.component';
import { SimpleComponent } from './simple/simple.component';
import { ParentComponent } from './parent-child/parent.component';
import { ChildComponent } from './parent-child/child.component';
import { DetectChangesTesterComponent } from './detect-changes-tester/detect-changes-tester.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroComponent } from './hero/hero/hero.component';

@NgModule({
  declarations: [
    DetectChangesTesterComponent,
    ProviderComponent,
    ChildComponent,
    ParentComponent,
    BlankComponent,
    SimpleComponent,
    HeroListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetectChangesTesterComponent,
    ProviderComponent,
    ChildComponent,
    ParentComponent,
    BlankComponent,
    SimpleComponent,
    HeroListComponent,
    HeroComponent
  ]
})
export class SamplesModule { }
