package com.example.designacoes.services;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.domains.Relatorio;
import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.repository.RelatorioRepository;
import com.example.designacoes.services.dto.RelatorioDTO;
import com.example.designacoes.services.error.ConstantesUtil;
import com.example.designacoes.services.error.NegocioException;
import com.example.designacoes.services.mapper.RelatorioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class RelatorioService {

    private final RelatorioRepository relatorioRepository;
    private final RelatorioMapper relatorioMapper;
    private final PublicadorRepository publicadorRepository;

    public RelatorioDTO obterPorId(Long id) throws NegocioException{
        return relatorioMapper.toDto(relatorioRepository.findById(id)
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE,ConstantesUtil.RELATORIO_NAO_ENCONTRADO)));
    }

    public RelatorioDTO salvarRelatorio(RelatorioDTO relatorioDTO) throws NegocioException {
        Publicador publicador = publicadorRepository.findById(relatorioDTO.getIdPublicador())
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE, ConstantesUtil.PESSOA_NAO_ENCONTRADA));
        Relatorio relatorio = relatorioMapper.toEntity(relatorioDTO);
        relatorio.setPublicador(publicador);
        relatorio = relatorioRepository.save(relatorio);
        return relatorioMapper.toDto(relatorio);
    }

    public void removerRelatorio(Long id) throws NegocioException{
        Relatorio relatorio = relatorioRepository.findById(id)
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE, ConstantesUtil.RELATORIO_NAO_ENCONTRADO));
        relatorioRepository.delete(relatorio);
    }

    public void atualizarRelatorio(Long id, RelatorioDTO relatorioDTO){
        relatorioRepository.findById(id)
                .map(relatorio -> {
                    Relatorio relatorioAtualizado = relatorioMapper.toEntity(relatorioDTO);
                    relatorioAtualizado.setId(relatorio.getId());
                    return relatorioMapper.toDto(relatorioRepository.save(relatorioAtualizado));
                })
                .orElseThrow(() -> new NegocioException(ConstantesUtil.ERROR_TITLE,ConstantesUtil.RELATORIO_NAO_ENCONTRADO));
    }
}
