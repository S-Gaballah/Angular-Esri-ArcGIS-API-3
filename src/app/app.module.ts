import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import 'hammerjs';

// imports
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MapModule } from './map/map.module';

@NgModule({
  imports: [
    BrowserModule,
    SidenavModule,
    ToolbarModule,
    MapModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
