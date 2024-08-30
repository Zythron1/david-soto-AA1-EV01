import { Component, OnInit } from '@angular/core';
import { AprendizService } from './aprendiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit { 
  title = 'STACK MEAN ADSO';
  aprendices: any[] = [];

  constructor(private aprendizService: AprendizService) { }

  ngOnInit(): void {
    this.cargarAprendices();
  }

  cargarAprendices(): void {
    this.aprendizService.getAprendices().subscribe(data => {
      this.aprendices = data;
    });
  }
}
