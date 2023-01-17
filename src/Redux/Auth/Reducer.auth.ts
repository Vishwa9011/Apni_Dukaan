import * as Types from './Types.auth';


const inititalState = {
     loading: false,
     error: '',
     authenticated: false,
     userCredentital: {}
}

export const Reducer = (state = inititalState, { type, payload }: any) => {
     switch (type) {
          case Types.AUTH_LOADING:
               return ({ ...state, loading: true });
          case Types.AUTH_ERROR:
               return ({ ...state, loading: false, error: payload });
          case Types.SIGNIN_SUCESS:
               return ({ loading: false, error: '', userCredential: payload, authenticated: true })
          case Types.SIGNOUT_SUCESS:
               return inititalState;
          default:
               return state;
     }
}

