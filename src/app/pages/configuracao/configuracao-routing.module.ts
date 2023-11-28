import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracaoPage } from './configuracao.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracaoPage,
    children: [
      {
        path: 'home',
        children:[  
          {
            path: '',
           loadChildren: () => import('src/app/home/home.module').then ((m) => m.HomePageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracaoPageRoutingModule {}
