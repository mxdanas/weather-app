import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData} from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { 

  }

  cityName: string ='london';
  weatherData?: WeatherData;
  ngOnInit(): void {
      this.getWeatherData(this.cityName);
      this.cityName = '';
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
      this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
        next: (response =>{
          this.weatherData = response;
          console.log(response); 
        })
      })
  }
}
