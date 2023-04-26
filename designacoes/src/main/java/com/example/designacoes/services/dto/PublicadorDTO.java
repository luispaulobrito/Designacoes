package com.example.designacoes.services.dto;

import com.example.designacoes.services.enumerations.PerfilEnum;
import com.example.designacoes.services.enumerations.PublicadorTipoEnum;
import com.example.designacoes.services.enumerations.SexoEnum;
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

    private PublicadorTipoEnum publicadorTipo;

    private String observacao;
}
