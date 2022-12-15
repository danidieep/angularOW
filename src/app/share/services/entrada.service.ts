import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/interfaces';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }
  public entrada: string = ''
  public recuperarEntradas(): Observable<Entrada[]>{
    return this.httpClient.get<Entrada[]>('assets/json/entradas.json')

  }

  public recuperarEntrada(id: number): Observable<Entrada> {

    return this.httpClient.get<Entrada[]>('assets/json/entradas.json').pipe(
      map((entradas: Entrada[]) => {

          let entrada: Entrada = {
            id: 0,
            autor: '',
            fecha: '',
            body: '',
            title: '',
            userId: 0
          };

          entradas.forEach( (entradaListado: Entrada) => {
            if (entradaListado.id == id) {
              entrada = entradaListado;
            }
          })

          return entrada;
        }
      )
    );
  }

  public editarEntrada(entrada: Entrada): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', entrada, { headers });
  }
}
