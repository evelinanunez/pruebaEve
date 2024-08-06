import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inscripcion } from '../models';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.css']
})
export class InscripcionesDialogComponent {
  inscripcionesForm : FormGroup;


  constructor(
              private fb : FormBuilder,
              private matDialogRef : MatDialogRef<InscripcionesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public inscripcion?: Inscripcion
  ){
    this.inscripcionesForm= this.fb.group({
      cursoId: ['',[Validators.required]],
      alumnoId: ['',[Validators.required]]
    });
    if(this.inscripcion){
      this.inscripcionesForm.patchValue(this.inscripcion);
  }
  }

  onSubmit(): void {
    if(this.inscripcionesForm.invalid){
      this.inscripcionesForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.inscripcionesForm.value);
    }
   }
}
