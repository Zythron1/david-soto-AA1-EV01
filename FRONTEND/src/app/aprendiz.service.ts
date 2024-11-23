import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aprendiz } from './aprendiz'; 

@Injectable({
  providedIn: 'root'
})
export class AprendizService {
  private apiURL = 'http://localhost:3000/aprendices'; // Cambia por tu endpoint real

  constructor(private http: HttpClient) { }

  getAprendices(): Observable<Aprendiz[]> {
    return this.http.get<Aprendiz[]>(this.apiURL);
  }
}
