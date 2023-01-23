import * as Types from './Types.Order';

const initialState = {
     loading: false,
     error: false,
     orders: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {

     switch (type) {
          case Types.GET_ORDERS_DATA:
               return { ...state, loading: false, error: false, orders: payload }
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