export interface LoginPayload {
  email: string | null;
  Clave: string | null;
}

export interface Usuario{
  email: string | null;
  Clave: string | null;
  token: string
}

export interface TokenLogin{
  isSuccess : boolean,
  token : string,
  nombreUsuario: string,
  apellidoUsuario : string
}