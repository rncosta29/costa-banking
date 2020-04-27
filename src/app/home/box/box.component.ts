import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Imagem } from 'src/app/model/imagem.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({ opacity: 0 })),
      state('visivel', style({ opacity: 1 })),
      transition('escondido <=> visivel', animate('2s ease-in'))
    ])
  ]
})
export class BoxComponent implements OnInit {

  public title: string = 'Here, our priority is you';
  public text: string = 'A bank with prizes and always with news for you';

  public estado: string = 'escondido';
  public imagens: Imagem[] = [
    { estado: 'visivel', url: '/assets/dinheiro.jpg' },
    { estado: 'escondido', url: '/assets/pessoas.png' }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.rotacao(), 3000);
  }

  public rotacao(): void {
    //variavel para auxiliar a exibição da proxima imagem
    let index: number;
    for(let i: number = 0; i<= 1; i++) {
      if(this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        index = i === 1 ? 0 : i + 1;
        break
      }
    }
    //exibir próxima imagem
    this.imagens[index].estado = 'visivel';
    setTimeout(() => this.rotacao(), 3000);
  }

}
