import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto.component';
import { FiltroPorTitulo } from "./foto.pipes";

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ], // oque meu modulo tem
  exports: [FotoComponent, FiltroPorTitulo] // oque os outros modulos podem acessar
})
export class FotoModule { }