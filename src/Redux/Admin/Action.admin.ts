import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import * as Types from './Types.admin'
import { db } from "../../Firebase/FirebaseConfig"
import { Dispatch } from "redux"
import { ToastType } from "../../Custom-hooks/UseToastMsg"
import { IOrdersProduct, IUser } from "../../Constants/Constant"

interface IAdminUpdateProducts {
     id: string
     category: string
     data: any
}

interface IAdminDeleteProduct {
     id: string
     category: string
}

// todo: to admin_delete_products
export const admin_delete_products = ({ id, category }: IAdminDeleteProduct) => (dispatch: Dispatch) => {
     dispatch({ type: Types.ADMIN_LOADING })
     const productRef = doc(db, `shop/${category}/${category}Data`, id);
     deleteDoc(productRef)
          .then(() => {
               dispatch({ type: Types.ADMIN_DELETE_PRODUCTS_SUCCESS })
          }).catch((err) => {
               dispatch({ type: Types.ADMIN_ERROR, payload: err })
          })
}

// todo: get all users
export const get_All_users = (Toast: Function) => (dispatch: Dispatch) => {
     dispatch({ type: Types.ADMIN_LOADING })
     const userRef = collection(db, 'users',);
     const unsub = onSnapshot(userRef, (snapShot) => {
          const data = snapShot.docs.map((doc) => doc.data());
          dispatch({ type: Types.ADMIN_SUCCESS_USERS, payload: data })
     }, (err) => {
          console.log('err: ', err);
          Toast(err, ToastType.error)
     })

     // cleanup
     return unsub;
}

// todo: get all order
export const get_All_orders = (Toast: Function) => (dispatch: Dispatch) => {
     dispatch({ type: Types.ADMIN_LOADING })
     const userRef = collection(db, 'orders');
     const unsub = onSnapshot(userRef, (snapShot) => {
          const data = snapShot.docs.map((doc) => doc.data());
          dispatch({ type: Types.ADMIN_SUCCESS_ORDERS, payload: data })
     }, (err) => {
          console.log('err: ', err);
          Toast(err, ToastType.error)
     })
     // cleanup
     return unsub;
}


// todo: to admin_delete_products
export const admin_update_Delivery_status = (id: string, deliveryStatus: string, Toast: Function) => (dispatch: Dispatch) => {
     dispatch({ type: Types.ADMIN_LOADING })
     const productRef = doc(db, `orders`, id);
     updateDoc(productRef, { deliveryStatus })
          .then(() => {
               dispatch({ type: Types.ADMIN_SUCCESS })
               Toast("Delivery Status has been changed.")
          }).catch((err) => {
               console.log('err: ', err);
               dispatch({ type: Types.ADMIN_ERROR, payload: '' })
          })
}

// todo: get days of creating
export const getDays = (createdAt: number) => {
     console.log('createdAt: ', createdAt);
     const today = new Date()
     const created = new Date(createdAt);
     const diff = today.getTime() - created.getTime()
     const days = Math.floor(diff / (1000 * 3600 * 24))
     // todo:  relative time format 
     const f = new Intl.RelativeTimeFormat('en-in', { style: 'long', numeric: 'auto' })
     return f.format(-days, 'days')
}

// todo: find active and passive user
export const FilterActiveAndPassiveUsers = (type: string, data: IUser[]) => {
     const activeUser = data.filter((user) => user.isActive);
     const passiveUser = data.filter((user) => !user.isActive);
     return { activeUser, passiveUser }
}


// todo: find the total revenue
export const FindTotalRevenue = (Orders: IOrdersProduct[]) => {
     const TotalRevenue = Orders.reduce((acc, order) => {
          return acc + (order.price * (order.qty || 1))
     }, 0)
     return TotalRevenue
}

