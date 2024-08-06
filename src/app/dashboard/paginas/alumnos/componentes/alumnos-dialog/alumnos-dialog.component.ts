import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../models';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html'
})
export class AlumnosDialogComponent {

  alumnosForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private matDialogRef : MatDialogRef<AlumnosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno?: Alumno
  ){
    this.alumnosForm = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(5)]],
      apellido:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      dni: ['',[Validators.required]],
      telefono: ['',[Validators.required]]
    });
    if(this.alumno){
      this.alumnosForm.patchValue(this.alumno);
    }
  }

  onSubmit(): void {
    if(this.alumnosForm.invalid){
      this.alumnosForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.alumnosForm.value);
    }
  }
}
