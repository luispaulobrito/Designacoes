package com.example.designacoes.services.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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

    @NotNull
    @Size(max = 120)
    private String nome;

    @NotNull
    private SexoEnum sexo;

    private Boolean flBatismo;

    @NotNull
    private PerfilEnum perfil;

    @NotNull
    private PublicadorTipoEnum publicadorTipo;

    private String observacao;
}
