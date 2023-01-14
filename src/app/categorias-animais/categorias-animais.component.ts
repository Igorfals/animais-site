import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-categorias-animais',
  templateUrl: './categorias-animais.component.html',
  styleUrls: ['./categorias-animais.component.css']
})
export class CategoriasAnimaisComponent implements OnInit {

  total: number = 0
  items: any[] = []
  constructor(private categoriaService: CategoriasService) {

  }

  ngOnInit(): void {
    this.getitems()
  }
  async getitems() {
    const result = await this.categoriaService.listarCategorias()
    this.items = result.categoriaAnimais
    this.total = result.total
    console.log(result);

  }
}
