package com.example.designacoes.services.error;

public class NegocioException extends Exception{
    private String titulo;
    private String mensagem;

    public NegocioException(String titulo, String mensagem) {
        super(titulo + " " + mensagem);
        this.titulo = titulo;
        this.mensagem = mensagem;
    }
}
