import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// A estrutura dos services são muito semelhantes, e para criar um componente no Angular você precisar para a aplicar a aplicação e utilizar o terminal.

const baseUrl = 'http://localhost:8080/';
//const baseUrl = 'https://dio-bankline-api-erasmo.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntistas`);
  }

  create(correntista:any): Observable<any> {
    return this.http.post(`${baseUrl}/correntistas`,correntista);
  }
}

