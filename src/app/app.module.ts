import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from './config/config.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { LogoComponent } from './logo/logo.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastService } from './forecast.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    LogoComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
