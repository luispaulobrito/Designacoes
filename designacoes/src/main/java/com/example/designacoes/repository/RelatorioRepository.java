package com.example.designacoes.repository;

import com.example.designacoes.domains.Relatorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RelatorioRepository extends JpaRepository<Relatorio, Long> {
    List<Relatorio> findByAnoAndMes(Long ano, Long mes);

    boolean existsByAnoAndMesAndPublicadorId(Long ano, Long mes, Long idPublicador);

}
