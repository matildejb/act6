import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { Observable, lastValueFrom, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient)
  private baseUrl: string = 'https://peticiones.online/api/users'

  //Observable nativo angular
  getAll(): Observable<IUsuario[]>{
 return this.httpClient.get<IUsuario[]>(this.baseUrl)
  }

  //Promesa
  getAllUser(): Promise<IUsuario[]>{
    return lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl))
  }

  getById(id: string): Promise<IUsuario>{
   return lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${id}`))
  }

  delete(id: string): Promise<IUsuario>{
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.baseUrl}/${id}`))
  }

  create(formValue: IUsuario): Promise<IUsuario>{
    return lastValueFrom(this.httpClient.post<IUsuario>(this.baseUrl, formValue))
  }

  update(formValue: IUsuario): Promise<IUsuario>{
    return lastValueFrom(this.httpClient.put<IUsuario>(`${this.baseUrl}/${formValue._id}`, formValue))
  }

  getByName(name: string): Observable<IUsuario[]> {
    return this.httpClient.get<any>(`${this.baseUrl}`).pipe(
      map(response => {
        
  // Filtrar los usuarios por nombre independientemente si tienen tildes o si estan camelcase
        return response.results.filter((usuario: IUsuario) => {
          let nameUsuario = this.quitarTildes(`${usuario.first_name} ${usuario.last_name}`);
          let parameterName = this.quitarTildes(name);
          return nameUsuario.includes(parameterName);
        });
      })
    );
 
  }

  quitarTildes(palabra: string): string{
   let sinTildes = ""
   sinTildes = palabra.toLowerCase()
   sinTildes = sinTildes.replaceAll('á', 'a')
   sinTildes = sinTildes.replaceAll('é', 'e')
   sinTildes = sinTildes.replaceAll('í', 'i')
   sinTildes = sinTildes.replaceAll('ó', 'o')
   sinTildes = sinTildes.replaceAll('ú', 'u')

   return sinTildes;

  }

}
