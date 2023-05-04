package com.example.designacoes.services.mapper;

import com.example.designacoes.domains.Relatorio;
import com.example.designacoes.services.dto.RelatorioDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RelatorioMapper extends EntityMapper<RelatorioDTO, Relatorio>{
    @Override
    @Mapping(source = "idPublicador", target = "publicador.id")
    Relatorio toEntity(RelatorioDTO dto);

    @Override
    @Mapping(source = "publicador.id", target = "idPublicador")
    RelatorioDTO toDto(Relatorio entity);
}
