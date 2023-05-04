package com.example.designacoes.services.mapper;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.services.dto.PublicadorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PublicadorMapper extends EntityMapper<PublicadorDTO, Publicador> {

}
