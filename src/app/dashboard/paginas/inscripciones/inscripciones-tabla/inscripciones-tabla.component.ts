import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Inscripcion } from '../models';

@Component({
  selector: 'app-inscripciones-tabla',
  templateUrl: './inscripciones-tabla.component.html',
  styleUrls: ['./inscripciones-tabla.component.css']
})
export class InscripcionesTablaComponent {

  @Input()
  dataSource : Inscripcion[] = [];

  displayedColumns = ['id', 'course', 'user', 'actions'];

  @Output()
  eliminarInscripcion = new EventEmitter<number>();

  @Output()
  editarInscripcion = new EventEmitter<Inscripcion>();

}
