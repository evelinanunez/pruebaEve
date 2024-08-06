/* import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Usuario } from "src/app/dashboard/paginas/usuarios/models";


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Actualizar usuario': props<{data : Usuario}>(),
    'Restabecer Auth Usuarios': emptyProps(),
  },
}); */

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Usuario } from 'src/app/dashboard/paginas/usuarios/models';


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Actualizar usuario': props<{ data: Usuario }>(),
    'Restabecer Auth Usuarios': emptyProps(),
  },
});
