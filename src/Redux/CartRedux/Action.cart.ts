import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Dispatch } from "redux"
import { IProduct, IUser } from "../../Constants/Constant";
import { ToastType } from "../../Custom-hooks/UseToastMsg";
import { db } from "../../Firebase/FirebaseConfig";
import * as Types from './Types.cart'
import { RootState } from "../store";


// todo: get products from cart and listening to the changes
export const getCartProduct = (email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.CART_LOADING });
     const cartRef = collection(db, `cart/${email}/cartData`)
     const unsub = onSnapshot(cartRef, (snapShot) => {
          const data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          dispatch({ type: Types.CART_GET_DATA_SUCCESS, payload: data })
     }, (error) => {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to fetch data from cart", ToastType.error)
     })

     // * deatching the listener
     return unsub;
}

// todo: Add product into cart
export const AddProductToCart = (product: IProduct, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (email) return;
     dispatch({ type: Types.CART_LOADING });
     try {
          const cartRef = doc(db, `cart/${email}/cartData`, product.id)
          await setDoc(cartRef, product)
          dispatch({ type: Types.CART_SUCCESS })
          Toast("Product successfully added into cart", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to add product into cart.", ToastType.error)
     }
}

// todo: updateqty of product in cart
export const UpdateQty = (product: any, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.CART_LOADING });
     try {
          const cartRef = doc(db, `cart/${email}/cartData`, product.id)
          await updateDoc(cartRef, product)
          dispatch({ type: Types.CART_SUCCESS })
          Toast('Product updated successfully.', ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to update product.", ToastType.error)
     }
}

// todo: delete product from cart
export const DeleteProductCart = (id: string, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.CART_LOADING });
     try {
          const cartRef = doc(db, `cart/${email}/cartData`, id)
          await deleteDoc(cartRef)
          Toast("Product has been removed successfully.")
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to delete product from cart.", ToastType.error)
     }
}

// todo: checkout
export const Checkout = (Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.CART_LOADING });
     try {

     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to Checkout.", ToastType.error)
     }
}

// todo: move product into wishlist
export const moveProductToWishlist = (product: IProduct, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.CART_LOADING });
     try {
          const cartRef = doc(db, `wishlist/${email}/wishlistData`, product.id)
          await setDoc(cartRef, product)
          dispatch({ type: Types.CART_SUCCESS })
          Toast("Product successfully added into wishlist", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.CART_ERROR })
          Toast("Failed to move product into wishlist.", ToastType.error)
     }
}