import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public title: string = 'COST BANKING - THE BEST BANKING OF CANADA';
  public buttonEnter: string = 'Enter';

  public agency: string = ''
  public account: string = ''
  public password: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaAgency(response: Event): void {
    this.agency = (<HTMLInputElement>response.target).value;
  }

  public atualizaAccount(response: Event): void {
    this.account = (<HTMLInputElement>response.target).value;
  }

  public atualizaPassword(response: Event): void {
    this.password = (<HTMLInputElement>response.target).value;
  }

  public sucessful(agency: string, account: string, password: string) {

    this.agency = agency
    this.account = account
    this.password = password

    if(agency === '1234' && account === '1234567' && password === 'Rafa2905') {
      alert('Ok')
    } else {
      alert('Deu zica')
    }
  }
}
