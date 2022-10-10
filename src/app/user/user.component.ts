import { Component, EventEmitter, Input, OnInit, OnDestroy, OnChanges, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';

export interface Persona {
  name: string;
  surname: string;

}

let seq =0;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy,OnChanges {
  @Input() name?: string ='';
  @Input() surname: string='';
  @Output() seleccionado =new EventEmitter<Persona>();

  private idseq:number  = 0;

  constructor(private logger:LoggerService) { 
    this.logger.info('Construyendo user ['+ this.idseq);


   }

  ngOnInit(): void {
    console.log('Inicializo componentes user['+ this.idseq);
  }
  
  ngOnDestroy(): void {
    console.log('Destruye componentes user['+ this.idseq);
  }

  ngOnChanges(): void {
    console.log('Cambiando componentes user['+ this.idseq);
  }

  pulsado(): void {
    console.log("he pulsado boton");

    this.seleccionado.emit({
      name : this.name || '',
      surname : this.surname
    });

  }

}
