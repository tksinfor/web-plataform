//inserir AuthGuard nos Routes do arquivo routing para
//verificar áreas dependentes de login
// {
//   path: 'admin',
//   component: CrisisAdminComponent,
//   canActivate: [AuthGuard]
// },

import { Injectable } from '@angular/core';
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(this.authService.isLoggedIn){ 
            return true; 
        }

        //Armazena a URL para o redireciomento
        this.authService.redirectURL = state.url;

        //Navega para o login
        this.router.navigate(['/login']);

        return false;
    }
}