import { collection, deleteDoc, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import * as Types from './Types.Order'
import { Dispatch } from "redux"
import { IProduct } from '../../Constants/Constant';

// todo: getOrdersProducts
export const getOrdersProducts = (email: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!email) return
     dispatch({ type: Types.ORDER_LOADING });
     const OrdersRef = collection(db, `orders`)
     const querry = query(OrdersRef, where("email", '==', email))
     const unsub = onSnapshot(querry, (snapShot) => {
          const data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          console.log('data: ', data);
          dispatch({ type: Types.GET_ORDERS_DATA, payload: data })
     }, (error) => {
          console.log('error: ', error);
          dispatch({ type: Types.ORDER_ERROR });
          Toast("Failed to fetch data from Orders", ToastType.error)
     })
     // * deatching the listener
     return unsub;
}

// todo: CancelFromOrders
export const CancelFromOrders = (id: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!id) return
     dispatch({ type: Types.ORDER_LOADING })
     try {
          const OrdersRef = doc(db, `orders`, id)
          await deleteDoc(OrdersRef);
          dispatch({ type: Types.ORDER_SUCCESS })
          Toast("Order has been canceled successfully.", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          Toast("Unable to Cancel product from Orders.", ToastType.error)
     }
}
