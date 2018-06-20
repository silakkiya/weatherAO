import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherService } from './weather.service';
// import {Isummary} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(public weatherService:WeatherService){

  }
    

searchButton(cityName:string){
  console.log("btn clicked");
  console.log(cityName);
  this.weatherService.fetchWeatherInfo(cityName);
    // console.log(weathercondition);
}
}