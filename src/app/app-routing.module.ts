import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTipoComponent } from './menu-tipo/menu-tipo.component';

const routes: Routes = [{
  path: '',
  component: MenuTipoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
