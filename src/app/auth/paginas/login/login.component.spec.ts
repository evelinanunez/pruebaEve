import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { HttpClientTestingModule} from "@angular/common/http/testing"
import { SharedModule } from "src/app/shared/shared.module";

describe ('LoginComponent', ()=>{
let loginComponent : LoginComponent;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[HttpClientTestingModule,
      SharedModule]
    });
    const fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
  });

  it( 'Debería de crear el login Component',()=>{
    //const fixture = TestBed.createComponent(LoginComponent);
    expect(loginComponent).toBeTruthy();
  });

  it('Deben marcarse como tocados todos los campos del formulario login', ()=>{
    loginComponent.loginForm.patchValue({
        email: 'Email no valido',
        password : ''
    });
    loginComponent.login();
    expect(loginComponent.loginForm.controls['email'].touched).toBeTrue();
    expect(loginComponent.loginForm.controls['password'].touched).toBeTrue();
  });

  it('Si los datos del formulario login son validos que se llame al metodo login del AuthService', ()=>{
    loginComponent.loginForm.patchValue({
      email: 'eve@gmail.com',
      password :'1234'
    });

    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService, 'login'
    );
    loginComponent.login();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();

  })
})
