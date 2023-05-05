package com.example.designacoes.domains;

import com.example.designacoes.services.enumerations.PerfilEnum;
import com.example.designacoes.services.enumerations.SexoEnum;
import com.example.designacoes.services.enumerations.TipoPublicadorEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Publicador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(name = "sexo", nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private SexoEnum sexo;

    @Column
    private Boolean flBatismo;

    @Column(name = "perfil", nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private PerfilEnum perfil;

    @Column(name = "publicadorTipo", nullable = false, length = 30)
    @Enumerated(EnumType.STRING)
    private TipoPublicadorEnum publicadorTipo;

    @Column
    private String observacao;

}
