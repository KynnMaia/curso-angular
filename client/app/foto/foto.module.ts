import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto.component';
import { FiltroPorTitulo } from "./foto.pipes";
import { FotoService } from "./foto.service";

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ], // oque meu modulo tem
  exports: [FotoComponent, FiltroPorTitulo], // oque os outros modulos podem acessar
  providers: [ FotoService ]
})
export class FotoModule { }