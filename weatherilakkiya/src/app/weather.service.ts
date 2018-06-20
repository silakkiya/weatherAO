import { Injectable } from '@angular/core';
import { ISummary } from './models/summary';
// import { WeatherService } from './weather.service';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  summary:ISummary;
  dayWiseMap:any;
  constructor(private httpService:Http) { 
    this.dayWiseMap={};
  }

  fetchWeatherInfo(cityName:string){
    const url=`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.httpService.get(url)
    .subscribe((res)=>{
      console.log(res.json());
      const data=res.json();
      this.summary = {
        cityName: data.city.name,
        day: data.list[0].dt,
        weathercondition:data.list[0].weather[0].description
        
      };

        data.list.forEach(date => {
          // console.log(date);
          const dateValue = new Date(date.dt * 1000);
          const dayNum = dateValue.getDay();
          if (dayNum in this.dayWiseMap) {
            this.dayWiseMap[dayNum].push(date);
          } else {
            this.dayWiseMap[dayNum] = [date];
          }
        });
        console.log(this.dayWiseMap);
    })
  }
        
  }


