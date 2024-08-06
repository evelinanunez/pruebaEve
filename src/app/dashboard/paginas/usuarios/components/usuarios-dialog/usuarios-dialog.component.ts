import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models';


@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styles: [
  ]
})
export class UsuariosDialogComponent {

  usuariosForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef : MatDialogRef <UsuariosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario?: Usuario,
  ){
    this.usuariosForm = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(5)]],
      apellido:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      rol: ['',[Validators.required]]
    });
    if(this.usuario){
      this.usuariosForm.patchValue(this.usuario);
    }
  }

  onSubmit() : void {
    if (this.usuariosForm.invalid){
      this.usuariosForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.usuariosForm.value);
    }
  }
}
