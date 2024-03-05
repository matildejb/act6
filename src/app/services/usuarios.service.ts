import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/users'

  //Promise
  getAllPromises(): Promise<IUsuario[]>{
    return lastValueFrom(this.httpClient.get<{ data: IUsuario[]}>(this.baseUrl)).then(response => response.data);
  }

}
