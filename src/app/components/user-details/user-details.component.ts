import { Component, Input, inject } from '@angular/core';
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
//caputurar el id de la serie para poder hacer una peticion a la api
  activatedRoute = inject(ActivatedRoute)
  usuariosService = inject(UsuariosService)
  @Input() unUsuario: any = {};

  ngOnInit(): void{
   this.activatedRoute.params.subscribe( async (params: any) =>  {
      const id = params.idUsuario
      try{
        this.unUsuario = await this.usuariosService.usuarioPorId(id)
        
      }catch (error) {
        console.log(error)
      }
      
    })
  }

}
