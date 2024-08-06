import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
//import { AuthService } from 'src/app/auth/auth.service';
import { LoginService } from 'src/app/auth/paginas/login/login.service';
import { Usuario } from 'src/app/dashboard/paginas/usuarios/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showFiller = false;

  public authUser$: Observable<Usuario | null>;
  constructor(private authService: LoginService){
      this.authUser$ = this.authService.authUser$;
  }

  get nombreCompleto$(): Observable<string> {
    return this.authUser$.pipe(
      map((usuario) => `${usuario?.nombre} ${usuario?.apellido}`)
    );
  }
  get email$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((usuario) => usuario?.email));
  }

  get rol$(): Observable<string | undefined>{
    return this.authUser$.pipe(map((usuario) => usuario?.rol));
  }
  logout(): void {
    this.authService.logout();
  }
}
