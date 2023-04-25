package com.example.rest;

import com.example.domains.Publicador;
import com.example.repository.PublicadorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/publicador")
@RequiredArgsConstructor
public class PublicadorController {

    private final PublicadorRepository repository;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Publicador salvar(@RequestBody Publicador publicador){
        return repository.save(publicador);
    }
}
