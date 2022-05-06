import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const baseUrl = `${environment.API}`

@Injectable({
  providedIn: 'root'
})

export class MovimentacaoService {

  constructor(private http: HttpClient) { }
 
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }

  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }
}


