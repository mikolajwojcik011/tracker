import {createAction} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";

export interface loginActionPayload{
  email: string,
  password: string
}

export interface loginSuccessActionPayload{
  email: string,
  password: string,
  uId: string
}

export interface loginErrorActionPayload{
  error: HttpErrorResponse,
}

export const login = createAction('[Auth/API login]', (payload: loginActionPayload) => payload)

export const loginSuccess = createAction( 'Auth/API loginSuccess', (payload: loginSuccessActionPayload) => payload)

export const loginError = createAction( 'Auth/API loginError', (payload: loginErrorActionPayload) => payload)
