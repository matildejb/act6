import { IUsuario } from './iusuario.interface';

export interface IResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: IUsuario[];
}


//Este modelo lo creamos para poder trabajar con la paginación
//Sacar todas las paginas que contiene la API externa  ??
//Al final no lo he usado 