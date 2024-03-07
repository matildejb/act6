import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent ,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 private usuariosServices = inject(UsuariosService)
  misUsuarios: IUsuario[] = [];
  page: number = 1;
  

  ngOnInit(): void{
    //Observable obtenemos la lista de usuarios
    this.usuariosServices.getAll().subscribe((data : any) => {
    if (data.results && Array.isArray(data.results)){
      this.misUsuarios = data.results;
    } else {
      console.error('El dato recibido no es un arreglo válido', data)
    }
    })
  }

}
