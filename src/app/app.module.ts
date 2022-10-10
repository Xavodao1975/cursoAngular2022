import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';
import { ResaltaDirective } from './directives/resalta.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WeatherComponent,
    ResaltaDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
