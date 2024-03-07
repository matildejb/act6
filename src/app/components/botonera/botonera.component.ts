import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

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
  router = inject(Router)

 async borrarUsuario(id: string){
    //llamar al servicio para borrar usuario
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Perderás tu usuario definitivamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "cancelar",
      confirmButtonText: "¡SÍ, Quiero hacerlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "Tu usuario ha sido eliminado correctamente",
          icon: "success"
          
        });
        this.router.navigate(['/home'])
      }
    });
 
  }
}
