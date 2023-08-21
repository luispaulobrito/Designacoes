import { Publicador } from './../domain/publicador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicadoresService {

  constructor(private http: HttpClient) { }

  salvar(publicador: Publicador) : Observable <Publicador>{
    return this.http.post<Publicador>('http://localhost:8080/api/publicadores', publicador);
  }

  atualizar( publicador : Publicador ) : Observable<any>{
    return this.http.put<Publicador>(`http://localhost:8080/api/publicadores/${publicador.id}`,publicador);
  }
  excluir( publicador : Publicador ) : Observable<any>{
    return this.http.delete<Publicador>(`http://localhost:8080/api/publicadores/${publicador.id}`);
  }
  getPublicadores() : Observable<Publicador[]>{
    return this.http.get<Publicador[]>('http://localhost:8080/api/publicadores');
  }  

  getPublicadoresFiltrados(termo: string): Observable<Publicador[]> {
    return this.http.get<Publicador[]>(`http://localhost:8080/api/publicadores/filtro?termo=${termo}`);
  }
  getPublicadorById(id: number) : Observable <Publicador>{
    return this.http.get<any>(`http://localhost:8080/api/publicadores/${id}`);
  }
}