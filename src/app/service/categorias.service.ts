import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  baseurl = 'http://localhost:3000/v1'
  constructor(private http: HttpClient) {

  }
  listarCategorias(): any {
    const httpOptions: any = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(`${this.baseurl}/categoria-animais`, httpOptions).toPromise()
  }
}
