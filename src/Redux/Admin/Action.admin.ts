import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import * as Types from './Types.admin'
import { db } from "../../Firebase/FirebaseConfig"
import { Dispatch } from "redux"

interface IAdminUpdateProducts {
     id: string
     category: string
     data: any
}

interface IAdminDeleteProduct {
     id: string
     category: string
}

// todo: to admin_products_update
export const admin_products_update = ({ id, category, data }: IAdminUpdateProducts) => (dispatch: Dispatch<any>) => {
     const productRef = doc(db, `shop/${category}/${category}Data`, id);
     updateDoc(productRef, data)
          .then(() => {

          }).catch(() => {

          })
}

// todo: to admin_delete_products
export const admin_delete_products = ({ id, category }: IAdminDeleteProduct) => (dispatch: Dispatch<any>) => {
     dispatch({ type: Types.ADMIN_LOADING })
     const productRef = doc(db, `shop/${category}/${category}Data`, id);
     deleteDoc(productRef)
          .then(() => {
               dispatch({ type: Types.ADMIN_DELETE_PRODUCTS_SUCCESS })
          }).catch((err) => {
               dispatch({ type: Types.ADMIN_ERROR, payload: err })
          })
}

