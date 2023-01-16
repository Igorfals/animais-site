import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTipoComponent } from './menu-tipo/menu-tipo.component';
import { CategoriasAnimaisComponent } from './categorias-animais/categorias-animais.component';
import { AnimaisComponent } from './animais/animais.component';


const routes: Routes = [
  {
    path: '',
    component: MenuTipoComponent
  },
  {
    path: 'categorias',
    component: CategoriasAnimaisComponent
  },
  {
    path: 'animais',
    component: AnimaisComponent
  },
  {
    path: 'categorias-tipos/:id',
    component: CategoriasAnimaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
