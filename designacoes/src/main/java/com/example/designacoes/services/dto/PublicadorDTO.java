package com.example.designacoes.services.dto;

import com.example.designacoes.services.enumerations.PerfilEnum;
import com.example.designacoes.services.enumerations.SexoEnum;
import com.example.designacoes.services.enumerations.TipoPublicadorEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PublicadorDTO {

    private Long id;

    private String nome;

    private SexoEnum sexo;

    private Boolean flBatismo;

    private PerfilEnum perfil;

    private TipoPublicadorEnum publicadorTipo;

    private String observacao;

    private RelatorioDTO relatorioDTO;
}
