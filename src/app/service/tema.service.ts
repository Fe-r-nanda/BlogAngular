import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  /*observable pra monitorar o que for colocado e o array pq traz uma lista*/

  getAllTema(): Observable<Tema[]>{
     return this.http.get<Tema[]>('https://blogdafe.herokuapp.com/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogdafe.herokuapp.com/temas/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
     return this.http.post<Tema>('https://blogdafe.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
     return this.http.put<Tema>('https://blogdafe.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://blogdafe.herokuapp.com/temas/${id}`, this.token)
  }/*quando no endereço houver um parametro {} devemos usar crase ` ao inves de aspas*/
}


