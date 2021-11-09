import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { EtoileComponent } from './etoile/etoile.component';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EtoileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
