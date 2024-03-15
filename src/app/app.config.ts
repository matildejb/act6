import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //provideHttpClient() Obligatorio para hacer peticiones a APIS externas
    //se utiliza como un proveedor en el array 'providers' lo que permite que HttpClient
    //esté disponible en toda la app Angular para realizar peticiones HTTP.
    provideHttpClient(),
  ],
};
