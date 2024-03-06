import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private arrUsuarios: IUsuario[] = [];
  private httpClient = inject(HttpClient)
  private baseUrl: string = 'https://peticiones.online/api/users'

  //Observable
  getAll(): Observable<IUsuario[]>{
 return this.httpClient.get<IUsuario[]>(this.baseUrl)
  }

  //Promesa
  getAllUser(): Promise<IUsuario[]>{
    return lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl))
  }

}
