import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
//import { LoginService } from './login.service'; // LoginService dentro de providers

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  providers: [  ]
})
export class LoginModule { }
