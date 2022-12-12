import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { ListadoComponent } from "./views/listado/listado.component";
import { NotFoundPageComponent } from "./views/not-found-page/not-found-page.component";
import { AboutUsComponent } from "./views/about-us/about-us.component";
import { LoginComponent } from './views/login/login.component';
import { FrontComponent } from './views/front/front.component';
import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes : Routes = [
  { path: 'front', component: FrontComponent, children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'aboutus', component: AboutUsComponent},
    { path: 'detalle-entrada/:id', component: DetallesEntradaComponent},

    {path: '', redirectTo: 'listado', pathMatch: 'full'}
  ]},

  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},

  { path: 'login', component: LoginComponent},

  { path: '', redirectTo: 'front/listado', pathMatch: 'full'},
  { path: '**', component: NotFoundPageComponent}
]


@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
