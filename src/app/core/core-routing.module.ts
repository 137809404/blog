import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component'
import { EQIMParamComponent } from './eqim-param/eqim-param.component'
import { SeedParamComponent } from './seed-param/seed-param.component'
import { InversionParamComponent } from "./inversion-param/inversion-param.component";
import {AutoCalculationComponent} from "./auto-calculation/auto-calculation.component";
import {ManualCalculationComponent} from "./manual-calculation/manual-calculation.component";
import {BusuanComponent} from "./busuan/busuan.component";

/*
面包屑的内容在data里设置
data: {
      breadcrumb: 'XXXXXX'
    }
*/
const routes: Routes = [
  {
    path: 'home', component: CoreComponent, data: {
      breadcrumb: '首页'
    }, children: [
      {
        path: 'eqim-param', component: EQIMParamComponent, data: {
          breadcrumb: 'EQIM参数'
        },
      },
      { path: '', redirectTo: 'eqim-param', pathMatch: 'full' },
      {
        path: 'seed-param', component: SeedParamComponent, data: {
          breadcrumb: 'Seed截取参数'
        }
      },
      {
        path: 'inversion-param', component: InversionParamComponent, data: {
          breadcrumb: '反演参数'
        }
      },
      {
        path: 'auto-calculation', component: AutoCalculationComponent, data: {
          breadcrumb: '自动计算结果'
        }
      },
      {
        path: 'manual-calculation', component: ManualCalculationComponent, data: {
          breadcrumb: '自动计算结果'
        }
      },
      {
        path: 'busuan',component: BusuanComponent,data: {
          breadcrumb: '遗漏地震补算'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
