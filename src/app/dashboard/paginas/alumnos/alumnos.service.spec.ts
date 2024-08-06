import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AlumnosService } from "./alumnos.service";
import { Alumno } from "./models";

describe('Alumnos service', ()=>{

  let alumnoServicio : AlumnosService;
  let httpController : HttpTestingController;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[],
      imports:[HttpClientTestingModule],
    })
    alumnoServicio = TestBed.inject(AlumnosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Alumnos servicio esta definido', ()=>{
    expect(alumnoServicio).toBeTruthy();
  });



  it('Verifico que el metodo traer alumnos me traiga los alumnos',()=>{
    let listaAlumnos : Alumno [] = [{
      "id": 3,
      "nombre": "Luisa",
      "apellido": "González",
      "email": "luisa@gmail.com",
      "dni": "555555555C",
      "telefono": 5555555555,
      "fechaNacimiento": new Date()
    },
    {
      "id": 4,
      "nombre": "Pedro",
      "apellido": "Fernández",
      "email": "pedro@gmail.com",
      "dni": "666666666D",
      "telefono": 6666666666,
      "fechaNacimiento": new Date()
    },
    {
      "id": 5,
      "nombre": "Ana",
      "apellido": "Martínez",
      "email": "ana@gmail.com",
      "dni": "777777777E",
      "telefono": 7777777777,
      "fechaNacimiento": new Date()
    }]

    alumnoServicio.getAlumnos()
    .subscribe({
      next:(alumnos)=>{
        expect(alumnos).toBeTruthy();
        expect(alumnos).toHaveSize(alumnos.length);
      }
    })

    httpController.expectOne({
      method:'GET',
      url: `http://localhost:3000/alumnos`
    })
    .flush([
      listaAlumnos]);



  });



  it('Eliminar un alumno', () => {
    const ALUMNO_MOCK: Alumno = {
      "id": 4,
      "nombre": "Pedro",
      "apellido": "Fernández",
      "email": "pedro@gmail.com",
      "dni": "666666666D",
      "telefono": 6666666666,
      "fechaNacimiento": new Date(),
    };

    let listaAlumnos: Alumno[] = [
      {
        "id": 3,
        "nombre": "Luisa",
        "apellido": "González",
        "email": "luisa@gmail.com",
        "dni": "555555555C",
        "telefono": 5555555555,
        "fechaNacimiento": new Date()
      },
      {
        "id": 4,
        "nombre": "Pedro",
        "apellido": "Fernández",
        "email": "pedro@gmail.com",
        "dni": "666666666D",
        "telefono": 6666666666,
        "fechaNacimiento": new Date()
      },
      {
        "id": 5,
        "nombre": "Ana",
        "apellido": "Martínez",
        "email": "ana@gmail.com",
        "dni": "777777777E",
        "telefono": 7777777777,
        "fechaNacimiento": new Date()
      }
    ];

    alumnoServicio.eliminarAlumno(ALUMNO_MOCK.id).subscribe(
       ()=>{
        //expect(listaAlumnos.length).toBe(longitudAntes - 1);
          expect(listaAlumnos.find(alumno => alumno.id === ALUMNO_MOCK.id)).toBeUndefined();
          done();
        });

    httpController.expectOne({
      method: 'DELETE',
      url: `http://localhost:3000/alumnos?id=${ALUMNO_MOCK.id}`
    }).flush({

    });

    //(listaAlumnos.length).toBe(longitudAntes - 1);

    //expect(listaAlumnos.find(alumno => alumno.id === ALUMNO_MOCK.id)).toBeUndefined();
  });

})


/*
it('Eliminar un alumno', (done) => {



   alumnoServicio.eliminarAlumno(ALUMNO_MOCK.id).subscribe(() => {

     // Este codigo se ejecuta si la solicitud se completa

 expect(listaAlumnos.length).toBe(longitudAntes - 1);

 expect(listaAlumnos.find(alumno => alumno.id === ALUMNO_MOCK.id)).toBeUndefined();

 done(); // Avisa a Jasmine que la prueba asíncrona ha terminado

   });


 });
 */
