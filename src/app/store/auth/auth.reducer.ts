import {createReducer, on} from "@ngrx/store";
import {login, loginError, loginErrorActionPayload, loginSuccess, loginSuccessActionPayload} from "./auth.actions";
import {HttpErrorResponse} from "@angular/common/http";

export interface authStateInterface{
  uId: string | null,
  email:string | null,
  authLoading: boolean,
  authSuccess: boolean,
  authError: HttpErrorResponse | null,
}

export const authState: authStateInterface = {
  uId: null,
  email: null,
  authLoading: false,
  authSuccess: false,
  authError: null,
};

export const authReducer = createReducer(
  authState,
  on(login, (state: authStateInterface) => ({
    ...state,
    authLoading: true})),
  on(loginSuccess, (state: authStateInterface, payload: loginSuccessActionPayload) => ({
    ...state,
    uId: payload.uId,
    email: payload.email,
    password: payload.password,
    authSuccess: true,
    authLoading: false,
    authError: null,
  })),
  on(loginError, (state: authStateInterface, payload: loginErrorActionPayload) => ({
    ...state,
    authError: payload.error,
  }))
)

