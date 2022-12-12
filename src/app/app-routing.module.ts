import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { ListadoComponent } from "./views/listado/listado.component";
import { NotFoundPageComponent } from "./views/not-found-page/not-found-page.component";
import { AboutUsComponent } from "./views/about-us/about-us.component";
import { LoginComponent } from './views/login/login.component';

const routes : Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'aboutus', component: AboutUsComponent},

  {path:'', redirectTo: '/listado', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}

]


@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
