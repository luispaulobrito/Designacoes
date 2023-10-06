package com.example.designacoes.repository;

import com.example.designacoes.domains.Relatorio;
import com.example.designacoes.services.dto.ResumoRelatorioDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RelatorioRepository extends JpaRepository<Relatorio, Long> {
    List<Relatorio> findByAnoAndMes(Long ano, Long mes);

    boolean existsByAnoAndMesAndPublicadorId(Long ano, Long mes, Long idPublicador);
    @Query(value = "SELECT NEW com.example.designacoes.services.dto.ResumoRelatorioDTO(r.mes,r.ano," +
            "case when p.publicadorTipo = 'PI' or (r.pioneiroAuxiliar = true and p.publicadorTipo = 'PB') then 'PA' else p.publicadorTipo END, " +
            " count(*) AS observacao,SUM(r.publicacoes),SUM(r.videos),SUM(r.horas),SUM(r.revisitas),SUM(r.estudos)) " +
            "from Relatorio r join Publicador p on r.publicador = p.id where r.mes = :mesParam and r.ano = :anoParam" +
            " GROUP BY r.mes, r.ano, case when p.publicadorTipo = 'PI' or (r.pioneiroAuxiliar = true and p.publicadorTipo = 'PB') then 'PA' else p.publicadorTipo END")
    List<ResumoRelatorioDTO> resumoRelatorios(@Param("mesParam") Long mes, @Param("anoParam") Long ano);
}
