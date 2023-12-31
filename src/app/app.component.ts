import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentLocationWeather();
  }

  public getCurrentLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe(
          (res) => {
            console.log(res);
            this.weather = res;
          },
          (err) => console.log(err)
        );
      });
    }
  }

  public getWeather(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe(
      (res) => {
        console.log(res);
        this.weather = res;
      },
      (err) => console.log(err)
    );
  }

  public submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getWeather(cityName.value);
      cityName.value = '';
    } else {
      alert('Inserta una ciudad');
    }

    cityName.focus();
    return false;
  }
}
