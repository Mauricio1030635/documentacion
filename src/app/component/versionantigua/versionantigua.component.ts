import { AfterViewInit, Component } from '@angular/core';

import * as Prism from 'prismjs'; // Importar Prism.js
import 'prismjs/components/prism-typescript';
import { classCompoent, inputCode, inputcomponent, outputcomponent, outputcomponentAdd } from '../../lineasCodigo/code';

@Component({
  selector: 'app-versionantigua',
  templateUrl: './versionantigua.component.html',
  styleUrl: './versionantigua.component.css'
})
export class VersionantiguaComponent implements AfterViewInit {

  classCompoent = classCompoent
  inputcomponent = inputcomponent
  inputCode = inputCode
  outputcomponent = outputcomponent
  outputcomponentAdd = outputcomponentAdd



  nombre = 'Es agregar  {{ variable }} en el HTML y en el ts "variable debe existir"';
  cajaTexto = "N/A"
  class = "text-success"
  clasArray = "text-uppercase"
  validation = false
  list = ["uno", "dos", "tres"]

  codigoEjemplo: string =
    `informacion(informacion: any) {
    this.list.push(informacion)
  }`;

  informacion(informacion: any) {
    this.list.push(informacion)
  }


  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
