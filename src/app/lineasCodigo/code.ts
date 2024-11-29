export const classCompoent =
    `<p [ngClass]="class">clase simple :[ngClass]="class" </p>
<p [ngClass]="[clasArray,'textopeque']">clase array : [ngClass]="[clasArray,'textopeque']" </p>
<p [ngClass]="{'textopeque': false, 'textoEjemplo': validation!=true}">
clase object : [ngClass]="&#123;'textopeque': false, 'textoEjemplo': validation!=true&#125;"
</p>`
export const inputcomponent = `<app-lista nombre="primary" classButton="btn btn-primary" />`


export const inputCode = `export class ListaComponent {

  @Input() classButton !: string
  @Input() nombre !: string

}`;


export const outputcomponent = `export class FormularioPaisesComponent {

  @Output() DATA = new EventEmitter<string>;
  campo: string = ""


  clicData() {
    this.emitir()
  };

  emitir() {
    this.DATA.emit(this.campo);
  }`


export const outputcomponentAdd = `<app-formulario-paises (DATA)="informacion($event)"></app-formulario-paises>`

