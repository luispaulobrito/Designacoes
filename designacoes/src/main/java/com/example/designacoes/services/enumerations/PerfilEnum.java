package com.example.designacoes.services.enumerations;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum PerfilEnum {
    SM("SERVO MINISTERIAL"),
    AN("ANCIAO"),
    NP("NÃO POSSUI");

    private String value;
}
