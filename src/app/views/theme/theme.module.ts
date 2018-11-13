// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeautyTipsComponent } from './beauty-tips.component';
import { TestimonialsComponent } from './testimonials.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
// Dropdowns Component


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    BeautyTipsComponent,
    TestimonialsComponent
  ]
})
export class ThemeModule { }
