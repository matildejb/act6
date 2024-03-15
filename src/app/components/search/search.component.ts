import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  busqueda: string = ''; // Propiedad para almacenar el valor del campo de búsqueda
  misUsuarios: any[] = []; // Propiedad para almacenar los usuarios
  
  router = inject(Router)
  usuariosServices = inject(UsuariosService)

  ngOnInit(): void {
    this.obtenerUsuarios(); // Obtener la lista de usuarios al inicializar el componente
  }

  getSearch(searchForm: any) : void{
   let busqueda = searchForm.value.busqueda;
   this.router.navigateByUrl("/home?query=" + busqueda)
  }

  obtenerUsuarios(): void {
    this.usuariosServices.dameUsuarios().subscribe((data: any) => {
      if (data && data.results && Array.isArray(data.results)) {
        this.misUsuarios = data.results;
      } else {
        console.error('El dato recibido no es un arreglo válido', data);
      }
    });
  }

}


