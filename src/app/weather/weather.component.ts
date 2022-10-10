import { Component, EventEmitter, Input,Output, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { WeatherData } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() city:string = '';
  @Input() temperature =0;
  @Input() status = '';
  @Output() change = new EventEmitter<WeatherData>(); 

  constructor() { }

  ngOnInit(): void {
  }

  subirGrado(): void{
    this.temperature++;
    this.emitChange();

  }

  bajarGrado(): void{
    this.temperature--;
    this.emitChange();
  }

  private emitChange():void{
    this.change.emit({
      city: this.city,
      temperature: this.temperature,
      status: this.status
    })

  }




}
