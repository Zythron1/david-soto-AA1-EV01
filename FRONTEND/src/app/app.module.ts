import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { ListaAprendicesComponent } from './lista-aprendices/lista-aprendices.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    ListaAprendicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
