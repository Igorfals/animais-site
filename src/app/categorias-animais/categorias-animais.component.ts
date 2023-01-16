import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-animais',
  templateUrl: './categorias-animais.component.html',
  styleUrls: ['./categorias-animais.component.css']
})
export class CategoriasAnimaisComponent implements OnInit {

  total: number = 0
  items: any[] = []
  id: any
  constructor(private categoriaService: CategoriasService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.params
  }

  ngOnInit(): void {
    this.getitems()
  }
  async getitems() {
    let filtro = {}
    if (typeof this.id.value.id === 'string') {
      filtro = {
        tipo: this.id.value.id,
      }
    }
    const result = await this.categoriaService.listarCategoriasTipo(filtro)
    this.items = result.categoriaAnimais
    this.total = result.total
  }
}
