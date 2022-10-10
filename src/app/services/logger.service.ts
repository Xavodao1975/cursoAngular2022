import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(texto: string): void{
    console.log(`Info: ${texto}`);
  }
  warm(texto: string): void{
    console.log(`Warm: ${texto}`);
  }
  error(texto: string): void{
    console.log(`ERROR: ${texto}`);
  }

  constructor() { }
}
