import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '../layout/layout.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';



@NgModule({
  declarations: [
    ListagemUsuarioComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
  ],
  exports: [CadastroUsuarioComponent,
    ListagemUsuarioComponent]
})
export class UsuarioModule { }
