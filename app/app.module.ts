import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
//sempre importar os modulos aqui
//depois inserir na imports abaixo tb

@NgModule({
  imports: 
  [ 
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: 
  [ 
    AppComponent,
    LoginComponent
  ],
  providers:
  [
    appRoutingProviders
  ],
  bootstrap: 
  [ 
    AppComponent 
  ]
  
})
export class AppModule { }
