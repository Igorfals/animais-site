import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class TipoAnimaisService {
  baseurl = 'http://localhost:3000/v1'
  constructor(private http: HttpClient) {

  }
  listarTipos(): any {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      // criando o header da minha requisição
    }
    // utilizando o http do angula, para chamar meu endpoint api http://localhost:3000/v1/tipo-animais
    return this.http.get(`${this.baseurl}/tipo-animais`, httpOptions).toPromise()
    // a cima estou montando ela
  }
}
