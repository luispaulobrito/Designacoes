package com.example.designacoes.domains;

import com.example.designacoes.services.enumerations.PerfilEnum;
import com.example.designacoes.services.enumerations.PublicadorTipoEnum;
import com.example.designacoes.services.enumerations.SexoEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Publicador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    private List<Relatorio> relatorios;

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
    private PublicadorTipoEnum publicadorTipo;

    @Column
    private String observacao;

}
