import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { OldAppComponent } from './old-app/old-app.component';

@NgModule({
  declarations: [
    AppComponent,
    OldAppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
