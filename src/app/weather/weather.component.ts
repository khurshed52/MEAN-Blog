import { Component, OnInit } from '@angular/core';
import  { WeatherService } from '../services/weather.service';
import { Weather } from '../services/weather';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData:any;
  public tDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  constructor(private weather: WeatherService, private cookies: CookieService) {
    setInterval(()=>{
      this.tDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    },1)
   }

  ngOnInit(): void {
    this.weather.getWeather().subscribe(
      res => {
        console.log(res);
        this.weatherData = [res]
      }
    )
  }

  public emloyees:any = [
    {code: 1 , name: "khurshed", gender:'male'},
    {code: 2 , name: "Shujaat", gender:'male'},
    {code: 3 , name: "Chandu", gender:'female'},
    {code: 4 , name: "Shab", gender:'female'}
  ]

 

}
