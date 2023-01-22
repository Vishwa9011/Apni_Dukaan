import { IOrdersProduct, IUser } from '../../Constants/Constant'
import * as Types from './Types.admin'

interface IInitialState {
     loading: boolean
     error: string
     users: IUser[]
     orders: IOrdersProduct[]
}


const inititalState: IInitialState = {
     loading: false,
     error: '',
     users: [],
     orders: []
}

export const Reducer = (state = inititalState, { type, payload }: any) => {
     switch (type) {
          case Types.ADMIN_LOADING:
               return { ...state, loading: true }
          case Types.ADMIN_ERROR:
               return { ...state, error: payload }
          case Types.ADMIN_SUCCESS:
               return { ...state, loading: false, error: '' }
          case Types.ADMIN_SUCCESS_USERS:
               return { ...state, loading: false, error: '', users: payload }
          case Types.ADMIN_SUCCESS_ORDERS:
               return { ...state, loading: false, error: '', orders: payload }
          case Types.ADMIN_UPDATE_PRODUCTS_SUCCESS:
               return { ...state, loading: false, error: '' }
          case Types.ADMIN_DELETE_PRODUCTS_SUCCESS:
               return { ...state, loading: false, error: '' }
          default:
               return state;
     }
}

