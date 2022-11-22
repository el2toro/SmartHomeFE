import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseModel } from "src/app/models/response.model";

@Injectable({
    providedIn: 'root'
})

export class WeatherService{

    url: string = 'https://localhost:7097/api/Weather/GetTemperature';

   constructor(/* @Inject('BASE_URL') private baseUrl: string, */ private http: HttpClient) {
    
   }

   getTemperature() : Observable<ResponseModel<string>>{
      var result = this.http.get<ResponseModel<string>> (this.url);
      result.subscribe(r => {
      console.log(r);
     })
      return result;
   }
}