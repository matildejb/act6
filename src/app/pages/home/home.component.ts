import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuariosServices = inject(UsuariosService)
  arrUsers: IUsuario[] = [];

  async ngOnInit(): Promise<void>{
  try{
    this.arrUsers = await this.usuariosServices.getAllPromises()
  }catch(err){
    console.log(err)
  }
    
  }

}
