package com.example.designacoes.services;

import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.services.dto.PublicadorDTO;
import com.example.designacoes.services.mapper.PublicadorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PublicadorService {

    private final PublicadorRepository publicadorRepository;
    private final PublicadorMapper publicadorMapper;
    public List<PublicadorDTO> listarPublicadores(){
        return publicadorMapper.toDto(publicadorRepository.findAll());
    }
}
