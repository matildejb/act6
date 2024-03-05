import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { BotoneraComponent } from '../botonera/botonera.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink, BotoneraComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  activatedRoute = inject(ActivatedRoute)
  usuariosService = inject(UsuariosService)
  unUsuario!: IUsuario;

  ngOnInit(){
   /* this.activatedRoute.params.subscribe((params: any) => {
      const id = Number(params.user)
      let response = this.usuariosService.getById(id)
      console.log(response)
      
    })*/
  }

}
