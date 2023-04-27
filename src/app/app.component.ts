import { Usuario } from './shared/model/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atividadeComponente';

  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  cadastrar(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
