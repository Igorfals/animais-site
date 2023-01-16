import { Component, OnInit } from '@angular/core';
import { TipoAnimaisService } from '../service/tipo-animais.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tipo',
  templateUrl: './menu-tipo.component.html',
  styleUrls: ['./menu-tipo.component.css']
})
export class MenuTipoComponent implements OnInit {

  total: number = 0
  items: any[] = []
  constructor(private tipoService: TipoAnimaisService, private router: Router) {

  }
  // estou chamando o service que criei no tipo-animais-service.ts
  ngOnInit(): void {
    this.getitems()
  }
  async getitems() {
    const result = await this.tipoService.listarTipos()
    this.items = result.tipoAnimais
    this.total = result.total
  }
  // na linha 21 estou chamando a função que vai buscar na minha api os tipos de animais Vertebrados e Invertebrados
  escolhertipo(id: string) {
    this.router.navigate([`categorias-tipos/${id}`])
  }
}
