package com.example.designacoes.services;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.domains.Relatorio;
import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.repository.RelatorioRepository;
import com.example.designacoes.services.dto.PublicadorDTO;
import com.example.designacoes.services.dto.RelatorioDTO;
import com.example.designacoes.services.error.ConstantesUtil;
import com.example.designacoes.services.error.NegocioException;
import com.example.designacoes.services.mapper.RelatorioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<RelatorioDTO> filtrarRelatorioPorAnoEMes(Long ano, Long mes) {
        return relatorioRepository.findByAnoAndMes(ano, mes).stream().map(relatorioMapper::toDto).collect(Collectors.toList());
    }

    public List<PublicadorDTO> obterPublicadoresERelatoriosPorAnoEMes(Long ano, Long mes) {
        List<Publicador> publicadores = publicadorRepository.findAll();
        List<Relatorio> relatorios = relatorioRepository.findByAnoAndMes(ano, mes);

        return publicadores.stream()
                .sorted(Comparator.comparing(Publicador::getNome))
                .map(publicador -> {
                    PublicadorDTO dto = new PublicadorDTO();
                    dto.setNome(publicador.getNome());

                    Optional<Relatorio> relatorioOptional = relatorios.stream()
                            .filter(relatorio -> relatorio.getPublicador().getId().equals(publicador.getId()))
                            .findFirst();

                    dto.setRelatorioDTO(relatorioOptional.map(relatorioMapper::toDto).orElse(new RelatorioDTO()));

                    return dto;
                }).collect(Collectors.toList());
    }



//    public List<RelatorioDTO> filtrarRelatorioPorAnoEMes(Long ano, Long mes) {
//        return relatorioRepository.findByAnoAndMes(ano, mes).stream().map(relatorioMapper::toDto).collect(Collectors.toList());
//    }


    public RelatorioDTO salvarRelatorio(RelatorioDTO relatorioDTO) throws NegocioException {
        if (relatorioRepository.existsByAnoAndMesAndPublicadorId(relatorioDTO.getAno(), relatorioDTO.getMes(), relatorioDTO.getIdPublicador())){
            throw new NegocioException(ConstantesUtil.ERROR_TITLE, ConstantesUtil.RELATORIO_JA_CADASTRADO);
        }
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
