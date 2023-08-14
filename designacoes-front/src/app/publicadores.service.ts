import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicador } from './publicadores/publicador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicadoresService {

  constructor(private http: HttpClient) { }

  salvar(publicador: Publicador) : Observable <Publicador>{
    return this.http.post<Publicador>('http://localhost:8080/api/publicadores', publicador);
  }

  getPublicadores() : Observable<Publicador[]>{
    return this.http.get<Publicador[]>('http://localhost:8080/api/publicadores');
  }  
}