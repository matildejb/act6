import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {
  @Input() parent: string = "";
  @Input() idUsuario: string = "";
  usuariosServices = inject(UsuariosService)

 async borrarUsuario(id: string){
    //llamar al servicio para borrar usuario
    let confirmacion = confirm('¿Estás seguro de eliminar definitivamente este usuario?')
    if(confirmacion) {
      //borrar
      let response = await this.usuariosServices.delete(id);
     if(response._id){
      alert('Se ha borrado correctamente el usuario de' + " " +response.first_name + " " + response.last_name)
     }
    }
  }
}
