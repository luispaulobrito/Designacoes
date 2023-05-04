package com.example.designacoes.services.enumerations;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TipoPublicadorEnum {
    PB("Publicador"),
    PA("Pioneiro Auxiliar"),
    PI("Pioneiro Auxiliar Indeterminado"),
    PR("Pioneiro Regular");

    private String value;
}
