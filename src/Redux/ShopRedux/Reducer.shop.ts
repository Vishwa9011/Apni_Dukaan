import * as Types from './Types.shop'

const initialState = {
     loading: false,
     error: false,
     data: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {

     switch (type) {
          case Types.SHOP_LOADING:
               return ({ ...state, loading: true })
          case Types.SHOP_ERROR:
               return ({ ...state, loading: false, error: true })
          case Types.GET_SHOP_DATA:
               return ({ ...state, loading: false, error: false, data: payload })
          default:
               return state;
     }

}