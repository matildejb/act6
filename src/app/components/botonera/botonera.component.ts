import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {
  @Input() botonera: string = "";
  usuariosServices = inject(UsuariosService)

  borrarUsuario(id: string){
    //llamar al servicio para borrar usuario
    let confirmacion = confirm('¿Estás seguro de eliminar definitivamente este usuario?')

  }
}
