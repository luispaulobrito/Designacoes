package com.example.designacoes.repository;

import com.example.designacoes.domains.Publicador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicadorRepository extends JpaRepository<Publicador, Long> {

}
