import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginModule }   from './login/login.module'; 
//sempre importar os modulos aqui
//depois inserir na imports abaixo tb

@NgModule({
  imports: 
  [ 
    BrowserModule,
    FormsModule, 
    LoginModule 
  ],
  declarations: 
  [ 
    AppComponent 
  ],
  bootstrap: 
  [ 
    AppComponent 
  ]
  
})
export class AppModule { }
