import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TpwComponent } from './tpw/tpw.component';
import { DaytileComponent } from './daytile/daytile.component';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    DaytileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
