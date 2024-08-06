import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../models';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrls: ['./cursos-detalle.component.css']
})
export class CursosDetalleComponent {


  id : number;
  curso : Curso | undefined;

  constructor(private activatedRoute : ActivatedRoute,
     private servicioCurso : CursosService
){
 this.id=this.activatedRoute.snapshot.params['id'];
 this.servicioCurso.cursoPorId(this.id).subscribe(
  (curso)=>{
    this.curso=curso;
  }
 );
  }
}
