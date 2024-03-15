import { Component, inject } from '@angular/core';
import { NightModeService } from '../../services/night-mode.service';

@Component({
  selector: 'app-boton-night',
  standalone: true,
  imports: [],
  templateUrl: './boton-night.component.html',
  styleUrl: './boton-night.component.css',
})
export class BotonNightComponent {
  //Injectamos el servicio night-mode
  private nightModeService = inject(NightModeService);
  //Definimos una propiedad tipo, inicializada a Nocturno
  tipo: string = 'Nocturno';

  //Este método se llamará cuando se haga click en el botón
  toggleNightMode() {
    this.nightModeService.toggleNightMode();
    this.tipo = this.nightModeService.isNightMode() ? 'Diurno' : 'Nocturno';
  }
}
