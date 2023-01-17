import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuTipoComponent } from './menu-tipo/menu-tipo.component';
import { CategoriasAnimaisComponent } from './categorias-animais/categorias-animais.component';
import { AnimaisComponent } from './animais/animais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
    MenuTipoComponent,
    CategoriasAnimaisComponent,
    AnimaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
