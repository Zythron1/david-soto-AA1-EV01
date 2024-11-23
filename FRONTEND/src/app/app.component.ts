import { Component, OnInit } from '@angular/core';
import { AprendizService } from './aprendiz.service';
import { Aprendiz } from './aprendiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit { 
  title = 'STACK MEAN ADSO';
  aprendices: Aprendiz[] = [];
  aprendicesFiltrados: Aprendiz[] = [];
  terminoBusqueda: string = '';
  p: number = 1;

  constructor(private aprendizService: AprendizService) { }

  ngOnInit(): void {
    this.cargarAprendices();
  }

  cargarAprendices(): void {
    this.aprendizService.getAprendices().subscribe(data => {
      this.aprendices = data;
      this.aprendicesFiltrados = data;
    });
  }

  filtrarAprendices(termino:string) {
    
    this.terminoBusqueda = termino;

    if (termino) {
      this.aprendicesFiltrados = this.aprendices.filter(a =>
        a.nombre.toLowerCase().includes(termino.toLocaleLowerCase()) ||
        a.apellido.toLowerCase().includes(termino.toLocaleLowerCase()) ||
        a.ficha.toLowerCase().includes(termino.toLocaleLowerCase())
      
      );
    } else {
      this.aprendicesFiltrados = this.aprendices;
    }

  }

  mostrarDatos(text: string):string {
    if (!this.terminoBusqueda.trim()) {
      return text;
    }

    const regex = new RegExp(`(${this.terminoBusqueda})`, 'gi');
    return text.replace(regex, `<mark>$1</mark>`);

  };

}
