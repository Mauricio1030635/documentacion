import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrl: './formulario-paises.component.css'
})
export class FormularioPaisesComponent {

  @Output() DATA = new EventEmitter<string>;
  campo: string = ""


  clicData() {
    this.emitir()
  };

  emitir() {
    this.DATA.emit(this.campo);
  }


}
