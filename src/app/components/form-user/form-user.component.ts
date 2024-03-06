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
  tipo: string = 'NUEVO';
  formModel: FormGroup;

  constructor(){
    this.formModel = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        //no se permite numeros
        Validators.pattern('[^0-9]*')
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[^0-9]*')
      ]),
      email: new FormControl(null, [
        Validators.required,
          //Propio validador para input tipo email
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
        
      ]),
      image: new FormControl(null, [
        Validators.required,
        Validators.pattern('^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpg|jpeg|gif|png)$')
        
      ]),
     
    }, [])
  }

  getDataForm(): void{
    //aquí debemos mandar los datos a la api con un post si es para guardar
    //o put si es actualizar 
    console.log(this.formModel.value)
    //Vaciar form
    this.formModel.reset()

  }

  //Validar formulario con una función, por limpieza de código
  checkControl(formControlName: string, validador: string): boolean | undefined {
   return this.formModel.get(formControlName)?.hasError(validador) && (this.formModel.get(formControlName)?.touched)

  }

}
