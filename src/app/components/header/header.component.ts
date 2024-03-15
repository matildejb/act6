import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BotonNightComponent } from '../boton-night/boton-night.component';
import { NightModeService } from '../../services/night-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BotonNightComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private nightModeService = inject(NightModeService);

  toggleNightMode() {
    this.nightModeService.toggleNightMode();
  }
}
