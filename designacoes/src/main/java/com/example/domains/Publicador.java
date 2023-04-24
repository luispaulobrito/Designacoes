package com.example.domains;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
public class Publicador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 150)
    private String nome;
    @Column
    private String sexo;
    @Column
    private Double batismo;
    @Column
    private String perfil;
    @Column
    private String pregacao;
    @Column
    private String observacao;
}
