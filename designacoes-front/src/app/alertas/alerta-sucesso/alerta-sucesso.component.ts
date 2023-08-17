import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-sucesso',
  templateUrl: './alerta-sucesso.component.html',
  styleUrls: ['./alerta-sucesso.component.css']
})
export class AlertaSucessoComponent {
  @Input() mensagem: string = '';
}
