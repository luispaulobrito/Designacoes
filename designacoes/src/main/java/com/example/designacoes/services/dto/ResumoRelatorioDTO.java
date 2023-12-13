package com.example.designacoes.services.dto;

import com.example.designacoes.services.enumerations.TipoPublicadorEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResumoRelatorioDTO {

    private Long mes;

    private Long ano;

    private String publicadorTipo;

    private Long observacao;

    private Long publicacoes;

    private Long videos;

    private Long horas;

    private Long revisitas;

    private Long estudos;
}
