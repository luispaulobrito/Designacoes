package com.example.designacoes.services.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RelatorioDTO {

    private Long id;

    private Long idPublicador;

    private Long mes;

    private Long ano;

    private Boolean pioneiroAuxiliar;

    private Long publicacoes;

    private Long videos;

    private Long horas;

    private Long revisitas;

    private Long estudos;

    private String observacao;

}
