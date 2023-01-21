import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import * as Types from './Types.wishlist'
import { Dispatch } from "redux"
import { IProduct } from '../../Constants/Constant';

// todo: getWishlistProducts
export const getWishlistProducts = (email: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!email) return
     dispatch({ type: Types.WISHLIST_LOADING });
     const wishlistRef = collection(db, `wishlist/${email}/wishlistData`)
     const unsub = onSnapshot(wishlistRef, (snapShot) => {
          const data = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          dispatch({ type: Types.GET_WISHLIST_DATA, payload: data })
     }, (error) => {
          console.log('error: ', error);
          dispatch({ type: Types.WISHLIST_ERROR })
          Toast("Failed to fetch data from wishlist", ToastType.error)
     })
     // * deatching the listener
     return unsub;
}


// todo: getWishlistProducts
export const addProductToWishlist = (product: IProduct, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!email) return
     dispatch({ type: Types.WISHLIST_LOADING })
     try {
          const wishlistRef = doc(db, `wishlist/${email}/wishlistData`, product.id)
          await setDoc(wishlistRef, { ...product, qty: 1 })
          dispatch({ type: Types.WISHLIST_SUCCESS })
          Toast("Product successfully added into wishlist", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.WISHLIST_ERROR })
          Toast("Failed to add product into wishlist.", ToastType.error)
     }
}


// todo: RemoveFromWishlist
export const RemoveFromWishlist = (email: string, id: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!email) return
     dispatch({ type: Types.WISHLIST_LOADING })
     try {
          const wishlistRef = doc(db, `wishlist/${email}/wishlistData`, id)
          await deleteDoc(wishlistRef);
          dispatch({ type: Types.WISHLIST_SUCCESS })
          Toast("Product has been removed successfully.", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          Toast("Unable to remove product from wishlist.", ToastType.error)
     }
}

// todo: moveProductTocart
export const moveProductTocart = (product: IProduct, email: string, Toast: Function) => async (dispatch: Dispatch) => {
     if (!email) return
     dispatch({ type: Types.WISHLIST_LOADING })
     try {
          const cartRef = doc(db, `cart/${email}/cartData`, product.id)
          const wishlistRef = doc(db, `wishlist/${email}/wishlistData`, product.id)
          await setDoc(cartRef, product) //todo: to set product into cart
          await deleteDoc(wishlistRef); //todo: to remove product from wishlist
          dispatch({ type: Types.WISHLIST_SUCCESS })
          Toast("Product successfully added into cart.", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.WISHLIST_ERROR })
          Toast("Failed to move product into cart.", ToastType.error)
     }
}