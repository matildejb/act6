import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  formModel: FormGroup;

  constructor(){
    this.formModel = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl("", [
        Validators.required,
        
      ]),
     
    }, [])
  }

  getDataForm(): void{
    console.log(this.formModel.value)
    //Vaciar form
    this.formModel.reset()

  }

}
