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
}
