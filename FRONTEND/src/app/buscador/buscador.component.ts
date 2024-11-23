import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  @Output() buscar = new EventEmitter<string>();
  
  onBuscar(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const termino = inputElement.value;
    console.log('Se buscó :', termino);

    this.buscar.emit(termino);
  }
}
