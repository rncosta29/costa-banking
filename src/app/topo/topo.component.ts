import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public title: string = 'Banco Costa - O melhor banco do Brasil!!';

  public agencia: string = ''
  public conta: string = ''
  public senha: string = ''

  public logado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaAgencia(response: Event): void {
    this.agencia = (<HTMLInputElement>response.target).value;
  }

  public atualizaConta(response: Event): void {
    this.conta = (<HTMLInputElement>response.target).value;
  }

  public atualizaSenha(response: Event): void {
    this.senha = (<HTMLInputElement>response.target).value;
  }

  public logar(agencia: string, conta: string, senha: string) {

    this.agencia = agencia
    this.conta = conta
    this.senha = senha

    if(agencia === '1234' && conta === '1234567' && senha === 'Rafa2905') {
      this.logado = true;
    } else {
      alert('Deu zica');
    }
  }

  public sair():void {
    this.logado = false;
  }
}
