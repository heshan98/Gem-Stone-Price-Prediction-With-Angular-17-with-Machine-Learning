import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  private baseUrl = 'http://localhost:5000/api';  // Adjust this URL according to your Flask API endpoint

  constructor(private http: HttpClient) { }

  predictDiamond(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/predict`, data);
  }
}
