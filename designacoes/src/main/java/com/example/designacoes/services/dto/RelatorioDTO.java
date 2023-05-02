package com.example.designacoes.services.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RelatorioDTO {

    private Long id;

    public Long idPublicador;

    private Long mes;

    private Long ano;

    private Long publicacoes;

    private Long videos;

    private Long horas;

    private Long revisitas;

    private Long estudos;

}
