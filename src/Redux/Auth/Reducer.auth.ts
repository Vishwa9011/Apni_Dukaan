import { IUser } from '../../Constants/Constant';
import * as Types from './Types.auth';


export interface IAuthInitialState {
     loading: boolean
     error: string
     authenticated: boolean
     userCredential: IUser | {}
}


const inititalState: IAuthInitialState = {
     loading: false,
     error: '',
     authenticated: false,
     userCredential: {}
}

export const Reducer = (state = inititalState, { type, payload }: any) => {
     switch (type) {
          case Types.AUTH_LOADING:
               return ({ ...state, loading: true });
          case Types.AUTH_ERROR:
               return ({ ...state, loading: false, error: payload });
          case Types.SIGNIN_SUCCESS:
               return ({ loading: false, error: '', userCredential: payload, authenticated: true })
          case Types.SIGNOUT_SUCCESS:
               return inititalState;
          default:
               return state;
     }
}

