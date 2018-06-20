import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  title = 'Does It Rain';

  isLogoVisible() {
    return this.configService.isLogoVisible;
  }

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

}
