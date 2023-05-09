import { Injectable } from '@angular/core';
import { environment } from './environments/environments';
import { HttpClient } from "@angular/common/http";
import { Publicador } from './publicador/publicador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicadorService {

  url : string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  save (publicador : Publicador) : Observable<Publicador>{
    return this.http.post<Publicador>(this.url, publicador)
  }

  list() : Observable<Publicador[]>{
    return this.http.get<any>(this.url);
  }

  deletar(publicador: Publicador): Observable<any> {
    return this.http.delete<any>(`${this.url}/${publicador.id}`);
  }

}
