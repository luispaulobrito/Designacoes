package com.example.designacoes.domains;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
@Data
public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_publicador")
    public Publicador publicador;

    @Column
    private Long mes;

    @Column
    private Long ano;

    @Column
    private Boolean pioneiroAuxiliar;

    @Column
    private Long publicacoes;

    @Column
    private Long videos;

    @Column
    private Long horas;

    @Column
    private Long revisitas;

    @Column
    private Long estudos;

    @Column
    private String observacao;
}
