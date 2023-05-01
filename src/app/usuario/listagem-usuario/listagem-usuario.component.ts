import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent {

  usuarios = [
    {nome: 'walter', cpf: '12234', idade: '22'},
    {nome: 'will', cpf: '33234', idade: '33'},
    {nome: 'Bor', cpf: '345234', idade: '27'},
  ];

  constructor() { }

  ngOnInit(): void {}


}


