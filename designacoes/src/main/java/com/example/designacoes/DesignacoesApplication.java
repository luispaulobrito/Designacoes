package com.example.designacoes;

import com.example.designacoes.domains.Publicador;
import com.example.designacoes.repository.PublicadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DesignacoesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesignacoesApplication.class, args);
	}

}
