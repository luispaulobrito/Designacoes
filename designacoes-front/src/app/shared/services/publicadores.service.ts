import { environment } from './../environments/environment';
import { Publicador } from './../domain/publicador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicadoresService {
  
  apiUrl: string = environment.apiUrl + '/api/publicadores';

  constructor(private http: HttpClient) { }

  salvar(publicador: Publicador) : Observable <Publicador>{
    return this.http.post<Publicador>(`${this.apiUrl}`, publicador);
  }

  atualizar( publicador : Publicador ) : Observable<any>{
    return this.http.put<Publicador>(`${this.apiUrl}/${publicador.id}`,publicador);
  }
  excluir( publicador : Publicador ) : Observable<any>{
    return this.http.delete<Publicador>(`${this.apiUrl}/${publicador.id}`);
  }
  getPublicadores() : Observable<Publicador[]>{
    return this.http.get<Publicador[]>(`${this.apiUrl}`);
  }  

  getPublicadoresFiltrados(termo: string): Observable<Publicador[]> {
    return this.http.get<Publicador[]>(`${this.apiUrl}/filtro?termo=${termo}`);
  }
  getPublicadorById(id: number) : Observable <Publicador>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}