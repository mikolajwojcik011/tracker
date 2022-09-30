import {ActionReducerMap} from "@ngrx/store";

import {authReducer, AuthStateInterface} from "./auth/auth.reducer";

export interface AppState{
  auth: AuthStateInterface,
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
}
