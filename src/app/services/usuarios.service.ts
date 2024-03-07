import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { Observable, lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private arrUsuarios: IUsuario[] = [];
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

}
