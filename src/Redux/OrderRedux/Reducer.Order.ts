import * as Types from './Types.Order';

const initialState = {
     loading: false,
     error: false,
     order: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {

     switch (type) {
          case Types.GET_ORDER_DATA:
               return { ...state, loading: false, error: false, order: payload }
          case Types.ORDER_LOADING:
               return { ...state, loading: true }
          case Types.ORDER_ERROR:
               return { ...state, error: true }
          case Types.ORDER_SUCCESS:
               return { ...state, loading: false, error: false }
          default:
               return state;
     }
}