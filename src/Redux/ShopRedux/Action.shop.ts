import { collection, onSnapshot } from "firebase/firestore"
import * as Types from './Types.shop'
import { Dispatch } from "redux"
import { ToastType } from "../../Custom-hooks/UseToastMsg"
import { db } from "../../Firebase/FirebaseConfig"
import { IToastProps } from "../../Constants/Constant"


// todo: getData from Database
export const getDataShop = (id: string | undefined, Toast: Function) => async (dispatch: Dispatch) => {
     console.log('called')
     dispatch({ type: Types.SHOP_LOADING })
     const shopCollectionRef = collection(db, `shop/${id}/${id}Data`)
     const unsubscribe = onSnapshot(shopCollectionRef, (snapShot) => {
          const data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          dispatch({ type: Types.GET_SHOP_DATA, payload: data })
     }, (err) => {
          Toast("Unable To Load Data", ToastType.error);
          dispatch({ type: Types.SHOP_ERROR })
     })
     // * clean
     return unsubscribe
}
