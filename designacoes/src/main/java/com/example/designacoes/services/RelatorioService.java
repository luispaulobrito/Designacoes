package com.example.designacoes.services;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.domains.Relatorio;
import com.example.designacoes.repository.RelatorioRepository;
import com.example.designacoes.services.dto.PublicadorDTO;
import com.example.designacoes.services.dto.RelatorioDTO;
import com.example.designacoes.services.mapper.RelatorioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RelatorioService {

    private final RelatorioRepository relatorioRepository;
    private final RelatorioMapper relatorioMapper;


    public RelatorioDTO salvarRelatorio(RelatorioDTO relatorioDTO){
        Relatorio relatorio = relatorioRepository.save(relatorioMapper.toEntity(relatorioDTO));
        return relatorioMapper.toDto(relatorio);
    }
    public List<RelatorioDTO> listarRelatorios() {
        List<RelatorioDTO> relatoriosDTO = relatorioMapper.toDto(relatorioRepository.findAll());
        return relatoriosDTO;
    }
}
