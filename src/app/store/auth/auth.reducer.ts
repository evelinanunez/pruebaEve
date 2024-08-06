import { createReducer, on } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import { Usuario } from 'src/app/dashboard/paginas/usuarios/models';

export const authFeatureKey = 'auth';

export interface State {
  authUser: Usuario | null;
}

const initialState: State = {
  authUser: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.actualizarUsuario, (state, { data }) => ({
    ...state,
    authUser: data,
  })),

  on(AuthActions.restabecerAuthUsuarios, () => initialState)
);
