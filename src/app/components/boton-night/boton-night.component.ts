import { Component, inject,  } from '@angular/core';
import { NightModeService } from '../../services/night-mode.service';

@Component({
  selector: 'app-boton-night',
  standalone: true,
  imports: [],
  templateUrl: './boton-night.component.html',
  styleUrl: './boton-night.component.css'
})
export class BotonNightComponent {
  private nightModeService = inject(NightModeService)
  tipo: string = "Oscuro";

  toggleNightMode(){
    this.nightModeService.toggleNightMode();
    this.tipo = this.nightModeService.isNightMode() ? "Diurno" : "Nocturno";
  } 

}
