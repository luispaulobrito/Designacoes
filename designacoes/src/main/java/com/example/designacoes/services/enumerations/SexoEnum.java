package com.example.designacoes.services.enumerations;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum SexoEnum {
    M("MASCULINO"),
    F("FEMININO");

    private String value;
}
