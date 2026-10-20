import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor(private http: HttpClient) { }

  getEmoji(): Observable<any> {
    return this.http.get<any>("https://localhost:7118/swagger/index.html/WeatherForecast");
  }

}

