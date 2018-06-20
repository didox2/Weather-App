import { Component, OnInit } from '@angular/core';
import { resolveDirective } from '@angular/core/src/render3/instructions';
import { Router } from '@angular/router';

import { CityComponent } from '../city/city.component';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchFormText;
  city;

  constructor(private router: Router, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.isLogoVisible = true;
  }

  searchTown() {
    this.city = this.searchFormText;
    this.router.navigate(['city/' + this.city]);
  }
}
