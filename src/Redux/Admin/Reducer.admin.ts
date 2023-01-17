import * as Types from './Types.admin'

const inititalState = {
     loading: false,
     error: '',
}

export const Reducer = (state = inititalState, { type, payload }: any) => {
     switch (type) {
          case Types.ADMIN_LOADING:
               return { ...state, loading: true }
          case Types.ADMIN_ERROR:
               return { ...state, error: payload }
          case Types.ADMIN_UPDATE_PRODUCTS_SUCCESS:
               return { ...state, loading: false, error: '' }
          case Types.ADMIN_DELETE_PRODUCTS_SUCCESS:
               return { ...state, loading: false, error: '' }
          default:
               return state;
     }
}

