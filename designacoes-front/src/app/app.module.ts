import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicadoresModule } from './publicadores/publicadores.module';
import { PublicadoresService } from './shared/services/publicadores.service';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { RelatoriosService } from './shared/services/relatorios.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PublicadoresModule,
    RelatoriosModule
  ],
  providers: [
    PublicadoresService,
    RelatoriosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
