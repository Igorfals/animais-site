import { Component, OnInit } from '@angular/core'
import { AnimaisService } from '../service/animais.service'

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {
  total: number = 0
  items: any[] = []
  constructor(private animaisService: AnimaisService) {

  }

  ngOnInit(): void {
    this.getitems()
  }
  async getitems() {
    const result = await this.animaisService.listarAnimais()
    this.items = result.animais
    this.total = result.total
  }
}
