import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

/*vamos instanciar, criar um obj para ser lido pelo ngmodeules no html (como se fosse leia no back)*/

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(             /*no constructor é onde criamos as dependencias*/
    private router: Router,
    private temaService: TemaService
    ) { }

    /*aqui criamos os métodos que chamamos no html */

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])


      this.findAllTemas()   /*ou seja, td vez que abrir a pag de temas ele automaticamente traz tds ja*/
    }
  }

  findAllTemas(){                   /*o subscribe tranforma o json em typescript*/
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{this.tema = resp
    alert ('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.tema = new Tema()
  })
  }

}
