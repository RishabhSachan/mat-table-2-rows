import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModules } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 

    // Material Modules
    AppMaterialModules
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
