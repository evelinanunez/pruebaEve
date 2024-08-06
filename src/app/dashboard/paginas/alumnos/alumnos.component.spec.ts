import { TestBed } from "@angular/core/testing"
import { AlumnosComponent } from "./alumnos.component"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SharedModule } from "src/app/shared/shared.module";
import { AlumnosTablaComponent } from "./componentes/alumnos-tabla/alumnos-tabla.component";

describe('AlumnosComponent',()=>{
let alumnosComponent : AlumnosComponent;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [AlumnosComponent,AlumnosTablaComponent],
      imports: [HttpClientTestingModule,SharedModule],
    });
    const fixture = TestBed.createComponent(AlumnosComponent);
    alumnosComponent = fixture.componentInstance;
  });

  it('Se debería de crear el componente Alumnos',()=>{
      expect(alumnosComponent).toBeTruthy();
  })
})
