import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserModule,
    MatPseudoCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatPseudoCheckboxModule
  ]
})
export class AppModule { }
