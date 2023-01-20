import * as Types from './Types.wishlist';

const initialState = {
     loading: false,
     error: false,
     wishlist: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {

     switch (type) {
          case Types.GET_WISHLIST_DATA:
               return { ...state, loading: false, error: false, wishlist: payload }
          case Types.WISHLIST_LOADING:
               return { ...state, loading: true }
          case Types.WISHLIST_ERROR:
               return { ...state, error: true }
          case Types.WISHLIST_SUCCESS:
               return { ...state, loading: false, error: false }
          default:
               return state;
     }
}