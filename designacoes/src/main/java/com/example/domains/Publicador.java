package com.example.domains;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Publicador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private List<Relatorio> relatorios;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column
    private Enum sexo;

    @Column
    private Boolean flBatismo;

    @Column
    private Enum perfil;

    @Column
    private Enum publicadorTipo;

    @Column
    private String observacao;
}
