import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AccidentDescriptionComponent } from './accident-description/accident-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EQIMParamComponent } from './eqim-param/eqim-param.component';
import { SeedParamComponent } from './seed-param/seed-param.component';
import { InversionParamComponent } from './inversion-param/inversion-param.component';
import { AutoCalculationComponent } from './auto-calculation/auto-calculation.component';
import { ManualCalculationComponent } from './manual-calculation/manual-calculation.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BusuanComponent } from './busuan/busuan.component';


@NgModule({
  declarations: [CoreComponent, AccidentDescriptionComponent, EQIMParamComponent, SeedParamComponent, InversionParamComponent, AutoCalculationComponent, ManualCalculationComponent, BusuanComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule
  ]
})
export class CoreModule { }
