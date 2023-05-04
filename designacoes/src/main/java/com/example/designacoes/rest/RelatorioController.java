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

    @GetMapping("{relatorioId}")
    public ResponseEntity<RelatorioDTO> obterRelatorioPorId(@PathVariable Long relatorioId){
        return ResponseEntity.ok(relatorioService.obterPorId(relatorioId));
    }

    @PostMapping()
    public ResponseEntity<RelatorioDTO> salvarRelatorio(@RequestBody RelatorioDTO relatorioDTO) throws NegocioException {
        RelatorioDTO novoRelatorioDTO = relatorioService.salvarRelatorio(relatorioDTO);
        return ResponseEntity.ok(novoRelatorioDTO);
    }

    @DeleteMapping("{relatorioId}")
    public ResponseEntity<Void> removerRelatorio(@PathVariable Long relatorioId) throws NegocioException{
        relatorioService.removerRelatorio(relatorioId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("{relatorioId}")
    public ResponseEntity<RelatorioDTO> atualizarRelatorio(@PathVariable Long relatorioId, @RequestBody RelatorioDTO relatorioAtualizado) throws NegocioException{
        relatorioService.atualizarRelatorio(relatorioId, relatorioAtualizado);
        return ResponseEntity.ok().build();
    }
}

