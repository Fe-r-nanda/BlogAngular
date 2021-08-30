import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { } /*http cliente libera o post get put delete*/

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin> ('https://blogdafe.herokuapp.com/usuarios/logar', userLogin)
  }
           /*pode ser qualquer um dos dois endereços coloquei diferente pra demonstrar*/
    cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario> ('https://blogdafe.herokuapp.com/usuarios/cadastrar', usuario)
  }
  /*td minusculo nome que a gente da pode mudar, td que for maiusculo é padrao*/

  logado(){  /*confirma se eciste um token relacionado, se sim usuario existe pode logar, senao, nao ex*/
    let ok: boolean = false

    if(environment.token != ''){    /*se o token é diferente de zero, entao existe dá ok*/
      ok = true
    }
    return ok
   }
}
