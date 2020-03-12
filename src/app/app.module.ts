import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LogginService } from './services/loggin-service.service';
import { PersonaService } from './services/peronas.service';
import { DataServices } from './services/date.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogginService, PersonaService, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
