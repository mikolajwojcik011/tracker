import {createReducer, on} from "@ngrx/store";
import {
  login,
  authError,
  AuthErrorActionPayload,
  authSuccess,
  AuthSuccessActionPayload,
  register, logout
} from "./auth.actions";
import {HttpErrorResponse} from "@angular/common/http";

export interface User {
  uId: string | null,
  email: string | null,
}

export interface AuthStateInterface {
  user: User | null,
  authLoading: boolean,
  authSuccess: boolean,
  authError: HttpErrorResponse | null,
}

export const authState: AuthStateInterface = {
  user: {
    uId: null,
    email: null,
  },
  authLoading: false,
  authSuccess: false,
  authError: null,
};

export const authReducer = createReducer(
  authState,
  on(login, (state: AuthStateInterface) => ({
    ...state,
    authLoading: true})),
  on(register, (state: AuthStateInterface) => ({
    ...state,
    authLoading: true,
  })),
  on(authSuccess, (state: AuthStateInterface, payload: AuthSuccessActionPayload) => ({
    ...state,
    uId: payload.uId,
    email: payload.email,
    authSuccess: true,
    authLoading: false,
    authError: null,
  })),
  on(authError, (state: AuthStateInterface, payload: AuthErrorActionPayload) => ({
    ...state,
    authError: payload.error,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
  }))
)

