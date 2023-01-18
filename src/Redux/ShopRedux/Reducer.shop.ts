import { IProduct } from '../../Constants/Constant'
import * as Types from './Types.shop'

interface IInitialStae {
     loading: boolean
     error: boolean
     data: IProduct[]
     searchData: IProduct[]
}

const initialState: IInitialStae = {
     loading: false,
     error: false,
     data: [],
     searchData: [],
}

export const Reducer = (state = initialState, { type, payload }: any) => {
     switch (type) {
          case Types.SHOP_LOADING:
               return ({ ...state, loading: true })
          case Types.SHOP_ERROR:
               return ({ ...state, loading: false, error: true })
          case Types.GET_SHOP_DATA:
               return ({ ...state, loading: false, error: false, data: payload })
          case Types.SHOP_SEARCH_SUCCESS:
               return ({ ...state, loading: false, error: false, searchData: payload })
          default:
               return state;
     }

}