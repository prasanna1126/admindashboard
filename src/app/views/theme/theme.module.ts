// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeautyTipsComponent } from './beauty-tips.component';
import { TestimonialsComponent } from './testimonials.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    BeautyTipsComponent,
    TestimonialsComponent
  ]
})
export class ThemeModule { }
