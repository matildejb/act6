import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NightModeService } from './services/night-mode.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Componente principal de nuestra app
  //Injectamos el servicio night-mode para utilzar el modo nocturno
  //El método isNightMode nos da acceso al modo nocturno en la plantilla HTML de
  //nuestro componente princial

  title = 'act6';
  nightModeService = inject(NightModeService);

  isNightMode() {
    return this.nightModeService.isNightMode();
  }
}
