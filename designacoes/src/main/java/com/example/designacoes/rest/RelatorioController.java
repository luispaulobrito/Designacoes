package com.example.designacoes.rest;

import com.example.designacoes.services.RelatorioService;
import com.example.designacoes.services.dto.RelatorioDTO;
import com.example.designacoes.services.error.NegocioException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/publicadores/relatorios")
@RequiredArgsConstructor
public class RelatorioController {
    private final RelatorioService relatorioService;

    @PostMapping()
    public ResponseEntity<RelatorioDTO> salvarRelatorioParaPublicador(@RequestBody RelatorioDTO relatorioDTO) throws NegocioException {
        RelatorioDTO novoRelatorioDTO = relatorioService.salvarRelatorio(relatorioDTO);
        return ResponseEntity.ok(novoRelatorioDTO);
    }

    @DeleteMapping("{relatorioId}")
    public ResponseEntity<Void> removerRelatorioDePublicador(@PathVariable Long relatorioId) throws NegocioException{
        relatorioService.removerRelatorio(relatorioId);
        return ResponseEntity.ok().build();
    }
}

