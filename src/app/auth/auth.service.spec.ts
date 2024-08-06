import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule} from "@angular/router/testing";
import { AuthService } from "./auth.service";
import { Usuario } from "../dashboard/paginas/usuarios/models";
import { MockProvider } from "ng-mocks";
import { Router } from "@angular/router";

describe('AuthService', ()=>{
let authService : AuthService;
let httpController : HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      RouterTestingModule],
      providers: [MockProvider(Router)]
    })

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  })

  it('AuthService esta definido', ()=>{
    expect(authService).toBeTruthy();
  });

  it('Verificar el login de un usuario', ()=>{
    const USUARIO_MOCK : Usuario = {
      id: 1,
      nombre: 'Evelina',
      apellido: 'Nuñez',
      email: 'eve@gmail.com',
      rol: 'profesor',
      password:'1234'
    };

    authService.login({
      email : USUARIO_MOCK.email,
      password: USUARIO_MOCK.password,
    });

      httpController.expectOne({
        method:'GET',
        url: `http://localhost:3000/usuarios?email=${USUARIO_MOCK.email}&password=${USUARIO_MOCK.password}`
      })
      .flush([
        USUARIO_MOCK]);

     authService.authUser$.subscribe({
      next: (authUser)=>{
        expect(authUser).toEqual(USUARIO_MOCK);
      }
     })
  });
})
