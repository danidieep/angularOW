import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { LoginComponent } from './views/login/login.component';
import { EspejoPipe } from './share/pipes/espejo.pipe';
import { FrontComponent } from './views/front/front.component';
import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    NotFoundPageComponent,
    AboutUsComponent,
    LoginComponent,
    EspejoPipe,
    FrontComponent,
    DetallesEntradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
