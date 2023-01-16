import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  baseurl = 'http://localhost:3000/v1'
  constructor(private http: HttpClient) {

  }
  listarAnimais(): any {
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(`${this.baseurl}/animais`, httpOptions).toPromise()
  }
}
