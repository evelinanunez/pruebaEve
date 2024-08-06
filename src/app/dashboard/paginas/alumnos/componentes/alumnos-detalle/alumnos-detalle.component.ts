import { Component } from '@angular/core';
import { Alumno } from '../../models';
import { AlumnosService } from '../../alumnos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumnos-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.css']
})
export class AlumnosDetalleComponent {

  id : number;
  alumno : Alumno | undefined;

  constructor( private activatedRoute : ActivatedRoute,
                private servicioAlumno : AlumnosService){
                  this.id= this.activatedRoute.snapshot.params['id'];
                  this.servicioAlumno.obtenerAlumnoPorId(this.id).subscribe(
                    (alumno)=>{
                      this.alumno=alumno;
                    }
                  );
                }
}
