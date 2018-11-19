// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeautyTipsComponent } from './beauty-tips.component';
import { TestimonialsComponent } from './testimonials.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap';
// Dropdowns Component


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule
  ],
  declarations: [
    BeautyTipsComponent,
    TestimonialsComponent
  ]
})
export class ThemeModule { }
