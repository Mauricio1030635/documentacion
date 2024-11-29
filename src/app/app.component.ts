import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Es agregar  {{ variable }} en el HTML y en el ts "variable debe existir"';
  cajaTexto = "N/A"
  class = "text-success"
  clasArray = "text-uppercase"
  validation = false
  list = ["uno", "dos", "tres"]

  informacion(informacion: any) {
    this.list.push(informacion)
  }



}
