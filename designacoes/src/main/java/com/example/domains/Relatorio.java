package com.example.domains;

import jakarta.persistence.*;
import lombok.Data;


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
    private Long publicacoes;

    @Column
    private Long videos;

    @Column
    private Long horas;

    @Column
    private Long revisitas;

    @Column
    private Long estudos;
}
