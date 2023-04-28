package com.example.designacoes.rest;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.services.PublicadorService;
import com.example.designacoes.services.dto.PublicadorDTO;
import com.example.designacoes.services.error.NegocioException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/publicadores")
@RequiredArgsConstructor
public class PublicadorController {
    private final PublicadorRepository repository;
    private final PublicadorService service;
    @GetMapping("{id}")
    public ResponseEntity<PublicadorDTO> obterPorId(@PathVariable Long id) throws NegocioException {
        return ResponseEntity.ok(service.obterPorId(id));
    }

    @GetMapping
    public ResponseEntity<List<PublicadorDTO>>  listarPublicadores(){
        return ResponseEntity.ok(service.listarPublicadores());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<PublicadorDTO> salvarPublicador(@Valid @RequestBody PublicadorDTO publicador) throws URISyntaxException {
        return ResponseEntity.created(new URI("/api/publicadores")).body(service.salvarPublicador(publicador));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> removerPublicador(@PathVariable Long id) throws NegocioException {
        service.removerPublicador(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("{id}")
    public ResponseEntity<Void> atualizarPublicador(@PathVariable Long id, @RequestBody PublicadorDTO publicadorAtualizado) throws NegocioException {
        service.atualizarPublicador(id, publicadorAtualizado);
        return ResponseEntity.ok().build();
    }
}
