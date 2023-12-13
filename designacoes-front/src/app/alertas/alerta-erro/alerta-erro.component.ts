import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-erro',
  templateUrl: './alerta-erro.component.html',
  styleUrls: ['./alerta-erro.component.css']
})
export class AlertaErroComponent {
  @Input() mensagem: string = '';
}
