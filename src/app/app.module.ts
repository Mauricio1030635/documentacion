import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { FormularioPaisesComponent } from './component/formulario-paises/formulario-paises.component';
import { VersionantiguaComponent } from './component/versionantigua/versionantigua.component';
import { CSharpComponent } from './component/csharp/csharp.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioPaisesComponent,
    VersionantiguaComponent,
    CSharpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
