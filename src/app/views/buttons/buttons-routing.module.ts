import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Refferal Rewards'
    },
    children: [
      {
        path: 'user-activities',
        component: ButtonsComponent,
        data: {
          title: 'User-Activities'
        }
      },
      {
        path: 'user-history',
        component: DropdownsComponent,
        data: {
          title: 'User-History'
        }
      },
      {
        path: 'perks',
        component: BrandButtonsComponent,
        data: {
          title: 'Perks'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
