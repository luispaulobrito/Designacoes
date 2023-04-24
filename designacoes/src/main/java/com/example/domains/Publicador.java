package com.example.domains;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

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
    private Enum batismo;

    @Column
    private Enum perfil;

    @Column
    private Enum pregacao;

    @Column
    private String observacao;
}
