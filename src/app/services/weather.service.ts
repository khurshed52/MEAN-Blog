import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?&appid=c556b3058c8277e0f01602683a52d1db&q=Dubai&units=metric';
  getWeather():Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherUrl)
  }
}
