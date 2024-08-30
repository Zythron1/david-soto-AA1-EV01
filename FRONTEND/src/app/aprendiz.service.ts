import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  private apiURL = 'http://localhost:3000/aprendices';

  constructor(private http: HttpClient) { }

  getAprendices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}
