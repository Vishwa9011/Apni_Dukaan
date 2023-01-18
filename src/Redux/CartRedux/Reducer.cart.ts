import * as Types from './Types.cart'

const initialState = {
     loading: false,
     error: false,
     cart: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {

     switch (type) {
          case Types.CART_LOADING:
               return ({ ...state, loading: true })
          case Types.CART_ERROR:
               return ({ ...state, error: true, loading: false })
          case Types.CART_GET_DATA_SUCCESS:
               return ({ ...state, error: false, loading: false, cart: payload })
          case Types.CART_SUCCESS:
               return ({ ...state, error: false, loading: false })
          default:
               return state
     }
}