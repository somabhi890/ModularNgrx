import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ModuleOneComponent, FirstPageComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule,
    SharedModule
  ]
})
export class ModuleOneModule { }
