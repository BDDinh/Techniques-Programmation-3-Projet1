import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EvaluationEtoilesComponent } from './evaluation-etoiles/evaluation-etoiles.component';
import { FormGestionForfaitsComponent } from './form-gestion-forfaits/form-gestion-forfaits.component';
import { FormRechercheComponent } from './form-recherche/form-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    EvaluationEtoilesComponent,
    FormGestionForfaitsComponent,
    FormRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://betterprogramming.pub/how-to-create-a-star-rating-component-in-angular-ff32234ea531