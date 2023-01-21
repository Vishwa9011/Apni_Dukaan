import { IProduct } from '../../Constants/Constant'
import * as Types from './Types.shop'

interface IInitialStae {
     loading: boolean
     error: boolean
     data: IProduct[]
     searchData: IProduct[]
     FilteredData: IProduct[],
     FilteredBrand: string[]
     FilteredCategory: string[]
}

const initialState: IInitialStae = {
     loading: false,
     error: false,
     data: [],
     searchData: [],
     FilteredData: [],
     FilteredBrand: [],
     FilteredCategory: []
}

export const Reducer = (state = initialState, { type, payload }: any) => {
     switch (type) {
          case Types.SHOP_LOADING:
               return ({ ...state, loading: true })
          case Types.SHOP_ERROR:
               return ({ ...state, loading: false, error: true })
          case Types.GET_SHOP_DATA:
               return ({ ...state, loading: false, error: false, data: payload.data, FilteredBrand: payload.FilteredBrand, FilteredCategory: payload.FilteredCategory, FilteredData: [] })
          case Types.SHOP_SEARCH_SUCCESS:
               return ({ ...state, loading: false, error: false, searchData: payload })
          case Types.SHOP_DATA_FILTERING_DONE:
               return ({ ...state, loading: false, FilteredData: payload })
          default:
               return state;
     }
}