import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
 
@Injectable()
class CheckLogged implements CanActivate{
    usuarios: any;
    constructor(
        private router: Router
    ){}
 

 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
 
            let username = localStorage.getItem('USER')
            let password = localStorage.getItem('PASSWORD')

            const user = this.usuarios.find((item) => item.username === username);

            if(user.password == password && user.username == username){
                return true;
            }else{
                username = ''
                password = ''
                alert('Usuário não cadastrado')
                this.router.navigate([''])
                return false;
            }
 
 
    }
}
 
export default CheckLogged;