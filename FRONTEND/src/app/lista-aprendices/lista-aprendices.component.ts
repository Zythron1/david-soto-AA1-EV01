import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-aprendices',
  templateUrl: './lista-aprendices.component.html',
  styleUrl: './lista-aprendices.component.css'
})
export class ListaAprendicesComponent {
  @Input() aprendices: any[] = [];
}
