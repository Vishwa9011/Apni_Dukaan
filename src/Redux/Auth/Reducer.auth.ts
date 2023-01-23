import { IUser } from '../../Constants/Constant';
import * as Types from './Types.auth';

const initialState = {
     uid: '',
     username: '',
     email: '',
     password: '',
     photoURL: '',
     phoneNumber: 0,
     googleAuth: false,
     isActive: false,
     isAdmin: false,
     gender: '',
     timeStamp: 0
}

export interface IAuthInitialState {
     loading: boolean
     error: string
     authenticated: boolean
     userCredential: IUser
}


const inititalState: IAuthInitialState  = {
     loading: false,
     error: '',
     authenticated: false,
     userCredential: initialState
}

export const Reducer = (state = inititalState, { type, payload }: any) => {
     switch (type) {
          case Types.AUTH_LOADING:
               return ({ ...state, loading: true });
          case Types.AUTH_ERROR:
               return ({ ...state, loading: false, error: payload });
          case Types.SIGNIN_SUCCESS:
               return ({ ...state, loading: false, error: '', userCredential: payload, authenticated: true })
          case Types.AUTH_OPERATION_SUCCESS:
               return ({ ...state, loading: false, error: '', })
          case Types.AUTH_USER_PROFILE_PHOTO_UPDATE:
               return ({ ...state, loading: false, error: '', userCredential: { ...state.userCredential, photoURL: payload } })
          case Types.AUTH_USER_PROFILE_UPDATE:
               return ({ ...state, loading: false, error: '', userCredential: payload })
          case Types.SIGNOUT_SUCCESS:
               return inititalState;
          default:
               return state;
     }
}

