import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Relatorio } from '../domain/relatorio';
import { ResumoRelatorio } from '../domain/resumo-relatorio';
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
  
  atualizar( relatorio : Relatorio ) : Observable<any>{
    return this.http.put<Relatorio>(`${this.apiUrl}/${relatorio.id}`,relatorio);
  }
  getRelatoriosPorMesEAno(ano: number, mes: number): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.apiUrl}/?mes=${mes}&ano=${ano}`);
  }

  getResumoRelatorio(ano: number, mes: number): Observable<ResumoRelatorio[]> {
    return this.http.get<ResumoRelatorio[]>(`${this.apiUrl}/resumo-relatorios?mes=${mes}&ano=${ano}`);
  }

  getRelatorioById(id: number) : Observable <Relatorio>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  excluir( relatorioDTO : Relatorio ) : Observable<any>{
    return this.http.delete<Relatorio>(`${this.apiUrl}/${relatorioDTO.id}`);
  }
}
