import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseModel } from "src/app/models/response.model";
import { WeekWeatherModel } from "src/app/models/weather/week-weather.model";

@Injectable({
    providedIn: 'root'
})

export class WeatherService{

    url: string = 'https://localhost:7097/api/Weather/';

   constructor(/* @Inject('BASE_URL') private baseUrl: string, */ private http: HttpClient) {
    
   }

   getTemperature() : Observable<ResponseModel<string>>{
      return  this.http.get<ResponseModel<string>> (this.url + "GetTemperature");
   }

   getWeeklyWeatherReport() : Observable<ResponseModel<WeekWeatherModel[]>>{
    return this.http.get<ResponseModel<WeekWeatherModel[]>> (this.url + "GetWeeklyWeatherReport");     
 }
}