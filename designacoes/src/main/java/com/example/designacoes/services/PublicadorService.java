package com.example.designacoes.services;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.services.dto.PublicadorDTO;
import com.example.designacoes.services.error.ConstantesUtil;
import com.example.designacoes.services.error.NegocioException;
import com.example.designacoes.services.mapper.PublicadorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    public PublicadorDTO obterPorId(Long id) throws NegocioException {
        return publicadorMapper.toDto(publicadorRepository.findById(id)
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE,ConstantesUtil.PESSOA_NAO_ENCONTRADA)));
    }

    public PublicadorDTO salvarPublicador(PublicadorDTO publicadorDTO){
        Publicador publicador = publicadorRepository.save(publicadorMapper.toEntity(publicadorDTO));
        return publicadorMapper.toDto(publicador);
    }

    public void removerPublicador(Long id) throws NegocioException {
        publicadorRepository.findById(id).map( publicador -> {
                    publicadorRepository.delete(publicador);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE,ConstantesUtil.PESSOA_NAO_ENCONTRADA));
    }

    public void atualizarPublicador(Long id, PublicadorDTO publicadorDTO) throws NegocioException {
        publicadorRepository.findById(id)
                .map(publicador -> {
                    Publicador publicadorAtualizado = publicadorMapper.toEntity(publicadorDTO);
                    publicadorAtualizado.setId(publicador.getId());
                    return publicadorMapper.toDto(publicadorRepository.save(publicadorAtualizado));
                })
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE,ConstantesUtil.PESSOA_NAO_ENCONTRADA));
    }

}
