import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule
  ]
})
export class AppMaterialModule {}
