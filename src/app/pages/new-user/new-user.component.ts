import { Component } from '@angular/core';
import { FormUserComponent } from '../../components/form-user/form-user.component';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormUserComponent],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

}
