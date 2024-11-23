import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-aprendices',
  templateUrl: './lista-aprendices.component.html',
  styleUrls: ['./lista-aprendices.component.css']
})
export class ListaAprendicesComponent {
  @Input() aprendices: any[] = [];
  @Input() mostrarDatos!: (text: string) => string;

  p: number = 1; // Página inicial

  // Método para manejar el cambio de página
  onPageChange(event: number): void {
    this.p = event;  // Aseguramos que el evento es tratado como un número
  }
}
