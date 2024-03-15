import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
  tipo: string = 'NUEVO';
  boton: string = 'Guardar';
  formModel: FormGroup;
  usuariosServices = inject(UsuariosService);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)

  constructor(){
    this.formModel = new FormGroup({
      //damos de alta el campo _id, id, username para no tener problemas
      //a la hora de exportar datos usuarios
     // _id: new FormControl(null, []),
      // id: new FormControl(null, []),
      // username: new FormControl(null, []),
      // password: new FormControl(null, []),

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

  //Reutilizar form para actualizar usuario debemos pedir los 
  //parámetros de ruta si existen actualizar y si no existen insertamos.
//Esta función se utiliza cuando se carga el componente
  ngOnInit(){
    this.activatedRoute.params.subscribe(async (params: any) => {
      if(params.id){
        this.tipo = 'ACTUALIZAR';
        this.boton = 'Actualizar';
        //estoy actualizando usuario si hay id, necesito pedr datos
        const response = await this.usuariosServices.usuarioPorId(params.id)
        //rellenamos form con datos de usuario
        //Opcion corta
       // this.formModel.setValue(response)
      
      
       //Opcion mas larga pero mas comoda
       this.formModel = new FormGroup({
        //Importante añadir nuestro identificador de usuario
        _id: new FormControl (response._id, []),
        first_name: new FormControl(response.first_name, [
          Validators.required,
          Validators.minLength(3),
          //no se permite numeros
          Validators.pattern('[^0-9]*')
        ]),
        last_name: new FormControl(response.last_name, [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[^0-9]*')
        ]),
        email: new FormControl(response.email, [
          Validators.required,
          
        ]),
        image: new FormControl(response.image, [
          Validators.required,
          
        ]),
       
      }, [])

      }else {
        //estoy creando un nuevo usuario
      }
    })
   }


 async getDataForm(){
  if(this.formModel.value._id){
    //actualizando usuario

    const response = await this.usuariosServices.actualizar(this.formModel.value)
   if(response.id){
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Usuario: ${response.first_name} ${response.last_name} se ha actualizado correctamente`,
      showConfirmButton: false,
      timer: 2000
    });
    this.router.navigate(['/home'])
    
  }
  else {
    alert('Ops parece que hubo un problema, inténtelo de nuevo')
   }

  }else {
    //nuevo usuario
    //aquí debemos mandar los datos a la api con un post si es para guardar
    //o put si es actualizar 
    const response = await this.usuariosServices.crear(this.formModel.value)
    console.log(response)
    //Vaciar form
    this.formModel.reset()
    if(response.id){
      //insertado correctamente, redirecionando a la home 
      Swal.fire({
        position: "center",
        icon: "success",
        title:`Usuario: ${response.first_name} ${response.last_name} se ha guardado correctamente`,
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/home'])
    }else {
      alert('Ops parece que hubo un problema, inténtelo de nuevo')
    }

  }
    
  }
 
  //Validar formulario con una función, por limpieza de código
  checkControl(formControlName: string, validador: string): boolean | undefined {
   return this.formModel.get(formControlName)?.hasError(validador) && (this.formModel.get(formControlName)?.touched)

  }

}
