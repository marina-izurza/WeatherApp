import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '015229d71ae07453e3f4261f96c330bf';
  uri: string = '';

  constructor(private http: HttpClient) {
    this.uri = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  public getWeather(cityName: string) {
    return this.http.get(`${this.uri}${cityName}`); //me devuelve el objeto json
  }
}
