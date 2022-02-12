import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-sua-nft',
  templateUrl: './lista-sua-nft.component.html',
  styleUrls: ['./lista-sua-nft.component.css']
})
export class ListaSuaNFTComponent implements OnInit {

  constructor(
    private router: Router

  ) { }


  ngOnInit() {
  }


  imageURL
  teste = 0;
  openModal

  mostrarImagem(event) {
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }


  abrirModal() {
    this.openModal = 1
    this.teste = 0;
    this.name = ""
    this.price = ""
  }

  preco: String = "";
  nome: String = "";
  saidaDosInputs = 0;

  clickBotao() {
    this.teste == 0;
    var containerIMG = document.createElement('div')
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.imageURL;
    console.log(item)
    // containerIMG.appendChild(image);
    // item.appendChild(containerIMG)
    // document.getElementById("SavedNFT").appendChild(containerIMG);
    image.id = 'imagemSalva'
    this.openModal = 2;
    
    
    image.style.height = '350px';
    image.style.width = '350px';
    image.style.margin = '-137px 0px 0px 0px';
    containerIMG.id = 'containerIMG'

    console.log(this.nome, this.preco)
    this.saidaDosInputs = 1;
    this.salvarDados.push({name: this.name, price: this.price, imageURL: this.imageURL})
  }

  salvarDados = []

  name = "";
  price = "";
}
