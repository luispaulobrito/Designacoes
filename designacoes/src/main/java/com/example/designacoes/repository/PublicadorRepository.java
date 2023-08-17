package com.example.designacoes.repository;

import com.example.designacoes.domains.Publicador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PublicadorRepository extends JpaRepository<Publicador, Long> {
    List<Publicador> findByNomeContainingIgnoreCase(String nome);

}
