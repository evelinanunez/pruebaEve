import { Component } from '@angular/core';
import { Inscripcion } from './models';
import { Observable } from 'rxjs';
import { InscripcionesService } from './inscripciones.service';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './inscripciones-dialog/inscripciones-dialog.component';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent {

  inscripciones$ : Observable<Inscripcion[]>;

  constructor(
              private inscripcionServicio : InscripcionesService,
              private matDialog : MatDialog
  ){
    this.inscripciones$ = this.inscripcionServicio.getInscripciones();
  }


  addInscripcionDialog() :void{
    this.matDialog.open(InscripcionesDialogComponent)
    .afterClosed()
    .subscribe({
      next: (inscripcion)=>{
        if(!!inscripcion){
          this.inscripcionServicio.crearIncripcion(inscripcion)
          .subscribe({
            next : ()=>{
              this.inscripciones$ = this.inscripcionServicio.getInscripciones();
            }
          })
        }
      }
    });
  }
  OnEditarInscripcion (inscripcionEditar : Inscripcion):void{
    this.matDialog.open(InscripcionesDialogComponent, {
      data : inscripcionEditar,
    })
    .afterClosed()
    .subscribe({
      next :(inscripcion)=>{
        if(!!inscripcion){
          this.inscripcionServicio.editarInscripcion(inscripcionEditar.id, inscripcion).subscribe({
            next : ()=>{
              this.inscripciones$ = this.inscripcionServicio.getInscripciones();
            }
          })
        }
      }
    })
  }

  OnEliminarInscripcion (idInscripcionEliminar : number): void{
    this.inscripcionServicio.eliminarInscripcion(idInscripcionEliminar).subscribe({
      next: ()=>{
        this.inscripciones$ = this.inscripcionServicio.getInscripciones();
      }
    })
  }
}
