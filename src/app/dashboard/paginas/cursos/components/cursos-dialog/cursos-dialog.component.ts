import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso} from '../../models';

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrls: ['./cursos-dialog.component.css']
})
export class CursosDialogComponent {

   cursosForm : FormGroup;

   constructor(
              private fb : FormBuilder,
              private matDialogRef : MatDialogRef<CursosDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public Curso?: Curso
   ){
    this.cursosForm = this.fb.group({
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      instructor: ['',[Validators.required]],
      costo: ['',[Validators.required]],
      categoria: ['',[Validators.required]]
    });
    if(this.Curso){
      this.cursosForm.patchValue(this.Curso);
    }
   }

   onSubmit(): void {
    if(this.cursosForm.invalid){
      this.cursosForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.cursosForm.value);
    }
   }

}
