import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUsuario!: IUsuario

}
