import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, RouterLink, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  usuariosServices = inject(UsuariosService);
  misUsuarios: IUsuario[] = [];
  //Ruta activada actualmente, ruta dinamica que se utiliza para el ID de usuario
  //Se puede acceder al valor de id usando activatedRouted
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    //Para mostrar el usuario que se busca en el input con boton buscar
    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      let query = queryParams.query;

      if (query) {
        this.usuariosServices.getByName(query).subscribe(
          (usuarios) => {
            this.misUsuarios = usuarios;
          },
          (error) => {
            console.error('Error al buscar usuario', error);
          }
        );
      } else {
        //Observable obtenemos la lista de usuarios
        this.usuariosServices.dameUsuarios().subscribe((data: any) => {
          if (data.results && Array.isArray(data.results)) {
            this.misUsuarios = data.results;
          } else {
            console.error('El dato recibido no es un arreglo válido', data);
          }
        });
      }
    });
  }
}
