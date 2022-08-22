import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
    
})
export class DataBindingComponent{

  public contadorClique: number = 0;

  public urlImagem: string = "https://www.cinemascomics.com/wp-content/uploads/2020/11/Dragon-Ball-Super.jpg";

  public nome: String = "";

  adicionarClique(){
    this.contadorClique++;
  }

  mostrarInformacoes() {
    window.alert("Treinando os conhecimentos em Angular");
  }

  desabilitaContador(){
    this.contadorClique = 0;
  }

  keyUp(event: any){
      this.nome = event.target.value;
  }

}

