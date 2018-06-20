import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isLogoVisible = true;

  constructor(private http: HttpClient) { }

  private configUrl = 'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=';

  getData(city) {
    return this.http.get(this.configUrl + city + '&days=7');
  }
}
