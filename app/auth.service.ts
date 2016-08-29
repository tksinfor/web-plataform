import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService{
    isLoggedIn: boolean = false;

    // armazena a URL para o redirecionamento após login
    redirectURL: string;

    login(){
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(){
        this.isLoggedIn = false;
    }
}