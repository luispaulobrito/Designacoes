package com.example.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_publicador")
    public Publicador publicador;

    @Column
    private Integer mes;

    @Column
    private Integer ano;

    @Column
    private Integer publicacoes;

    @Column
    private Integer videos;

    @Column
    private Integer horas;

    @Column
    private Integer revisitas;

    @Column
    private Integer estudos;
}
