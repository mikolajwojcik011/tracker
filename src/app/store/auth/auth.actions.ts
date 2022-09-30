import {createAction} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";

export interface LoginActionPayload {
  email: string,
  password: string
}

export interface RegisterActionPayload{
  email: string,
  password: string
}

export interface AuthSuccessActionPayload {
  email: string,
  uId: string
}

export interface AuthErrorActionPayload {
  error: HttpErrorResponse,
}

export const login = createAction('[Auth/API login]', (payload: LoginActionPayload) => payload)

export const register = createAction('[Auth/Api register]', (payload: RegisterActionPayload) => payload)

export const authSuccess = createAction( 'Auth/API loginSuccess', (payload: AuthSuccessActionPayload) => payload)

export const authError = createAction( 'Auth/API loginError', (payload: AuthErrorActionPayload) => payload)

export const logout = createAction( 'Auth logout')
