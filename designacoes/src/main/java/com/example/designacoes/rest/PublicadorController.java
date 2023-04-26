package com.example.designacoes.rest;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.repository.PublicadorRepository;
import com.example.designacoes.services.PublicadorService;
import com.example.designacoes.services.dto.PublicadorDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/publicador")
@RequiredArgsConstructor
public class PublicadorController {

    private final PublicadorRepository repository;
    private final PublicadorService service;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Publicador salvar(@RequestBody Publicador publicador){
        return repository.save(publicador);
    }

    @GetMapping("{id}")
    public Publicador acharPorId(@PathVariable Long id){
        return repository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public List<PublicadorDTO> obterTodos(){
        return service.listarPublicadores();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        repository.findById(id).map( publicador -> {
                    repository.delete(publicador);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void atualizar(@PathVariable Long id, @RequestBody Publicador publicadorAtualizado){
        repository.findById(id).map( publicador -> {
            publicadorAtualizado.setId(publicador.getId());
            return repository.save(publicadorAtualizado);
        })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
