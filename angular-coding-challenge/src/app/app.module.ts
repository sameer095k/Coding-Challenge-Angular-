import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridAlgComponent } from './grid-alg/grid-alg.component';

@NgModule({
  declarations: [
    AppComponent,
    GridAlgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
