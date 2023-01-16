import { Component, OnInit } from '@angular/core'
import { AnimaisService } from '../service/animais.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {
  total: number = 0
  items: any[] = []
  id: any
  constructor(private animaisService: AnimaisService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.params
  }

  ngOnInit(): void {
    this.getitems()
  }
  async getitems() {
    let filtro = {}
    if (typeof this.id.value.id === 'string') {
      filtro = {
        categoria: this.id.value.id
      }
    }
    const result = await this.animaisService.listarAnimaisTipos(filtro)
    this.items = result.animais
    this.total = result.total
  }
}
