import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MagicStringModule } from "magic-string"
import { MagicStringLibModule } from "magic-string-lib"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicStringModule,
    MagicStringLibModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { } 
