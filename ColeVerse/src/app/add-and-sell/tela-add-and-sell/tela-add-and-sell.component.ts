import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tela-add-and-sell',
  templateUrl: './tela-add-and-sell.component.html',
  styleUrls: ['./tela-add-and-sell.component.css']
})
export class TelaAddAndSellComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
    ) { }
    
    id;
  ngOnInit() {
        let username = localStorage.getItem("USER")
        let passwd = localStorage.getItem("PASSWORD")
        if (username && passwd){
          this.usuarioService.buscarUsuarios().then((resultado: any) =>{
            for (let i = 0; i < resultado.length; i++){
              if (username == resultado[i].NOME && passwd == resultado[i].PASSWORD){
                this.id = resultado[i].ID
                console.log(this.id)
              }
            }
          })
        }
  }

  logOut() {
    swal("Logout success!", "", "success");
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 1000);
  }

  irParaSell(){
    this.usuarioService.inserirVendedor(this.id)
    this.router.navigate(['/vendernft'])
  }
}

interface Person{
  NOME: String
  PASSWORD: String
}
