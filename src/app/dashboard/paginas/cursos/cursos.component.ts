import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';
import { catchError, map, Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  {

  //cursos : Curso[] = [];

  cursos: Curso[] = [];

  constructor(private cursoServicio : CursosService,
              private matDialog : MatDialog){
              /*   this.cursoServicio.getCursos().subscribe(
                  (data) => {
                    this.cursos = data;
                    console.log(typeof this.cursos)
                  },
                  (error) => {
                    console.error('Error al obtener los cursos:', error);
                    // Manejo de errores si es necesario
                  }
                ); */

              
  }
  ngOnInit(): void {
    this.cursoServicio.getCursos().subscribe(
      (data) => {
        this.cursos = data; // Asigna los datos recibidos al arreglo cursos
      },
      (error) => {
        console.error('Error al obtener los cursos:', error);
        // Manejo de errores si es necesario
      }
    );
  }

  
/*   addCursoDialog() :void{
      this.matDialog.open(CursosDialogComponent)
      .afterClosed()
      .subscribe({
        next: (curso)=>{
          if(!!curso){
            this.cursoServicio.crearCurso(curso)
            .subscribe({
              next : ()=>{
                this.cursos = this.cursoServicio.getCursos();
              }
            })
          }
        }
      });
  } */
/* 
  OnEditarCurso( cursoEdit : Curso) :void{
    this.matDialog.open(CursosDialogComponent, {
      data : cursoEdit,
    })
    .afterClosed()
    .subscribe({
      next :(curso)=>{
        if(!!curso){
          this.cursoServicio.editarCurso(cursoEdit.idCurso, curso).subscribe({
            next : ()=>{
              this.cursos$ = this.cursoServicio.getCursos();
            }
          })
        }
      }
    })
  } */


/*   OnEliminarCurso (IdcursoEliminar : number ) : void{
    this.cursoServicio.eliminarCurso(IdcursoEliminar).subscribe({
      next: ()=>{
        this.cursos$ = this.cursoServicio.getCursos();
      }
    })
  }
 */
}
