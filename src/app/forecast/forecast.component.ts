import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})

export class ForecastComponent implements OnInit {

  forecastdays;
  isLogoVisible;
  city;

  constructor(private forecastService: ForecastService, private configService: ConfigService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.forecastdays = this.forecastService.getForecastDays();
    this.configService.isLogoVisible = false;
    this.route.params.subscribe(res => this.city = res.name);
  }

  getDayOfWeek(date) {
    return this.forecastService.getDayOfWeek(date);
  }

}
