import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relatorio } from '../domain/relatorio';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  apiUrl: string = environment.apiUrl + '/api/relatorios'

  constructor(private http: HttpClient) { }

  salvar(relatorio: Relatorio) : Observable <Relatorio>{
    return this.http.post<Relatorio>(`${this.apiUrl}`, relatorio);
  }

  getRelatoriosPorMesEAno(ano: number, mes: number): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.apiUrl}/?mes=${mes}&ano=${ano}`);
  }
}
