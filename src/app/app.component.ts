import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Persona } from './user/user.component';
import { WeatherData } from './weather/weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private logger:LoggerService) { 
    this.logger.info('Construyendo user []');
   }

  title = 'angular0';
  messages: string[]=[];
  usuarioaSeleccionado = '';


  onChange(change:WeatherData): void{
    //const msg = change.city + ' temp:'+change.temperature;

    const msg = `Ciudad: ${change.city} Temperatura: ${change.temperature} Status: ${change.status} `;

    this.messages.push(msg);
    
    }



    personas: Persona[] = [
      {
        name:'Pedro',
        surname:'Mora'    
      },
      {
        name:'Pedro1',
        surname:'Mora1'    
      },
      {
        name:'Pedro2',
        surname:'Mora2'    
      }
    ]
     
    
      onSelect(persona: Persona)
       : void{
        console.log('Componene padre seleccionado'+ persona.name);
      }

}
