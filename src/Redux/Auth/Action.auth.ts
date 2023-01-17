import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { Dispatch } from "redux"
import { auth, db, provider } from "../../Firebase/FirebaseConfig"
import { IAuthDetailLogin, IToastProps, IUser } from "../../Constants/Constant"
import { doc, getDoc, setDoc } from "firebase/firestore"
import * as Types from './Types.auth'
import { ToastType } from './../../Custom-hooks/UseToastMsg';


// todo: to signInWithGoogle
export const signInWithGoogleAuth = (Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userCredential = await signInWithPopup(auth, provider)
          const user = userCredential.user;
          const userRef = doc(db, 'users', user.uid)
          const userDetail = {
               uid: user.uid, username: user.displayName, email: user.email, photoURL: user.photoURL,
               phoneNumber: user.phoneNumber, googleAuth: true, isActive: true, isAdmin: false,
               gender: '', address: '', password: null
          }

          // * setting the document into the database
          await setDoc(userRef, userDetail);
          dispatch({ type: Types.SIGNIN_SUCESS, payload: userDetail })
          Toast("Login Success", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}


// todo: to signUpWithEmailandPassword
export const signUp = ({ email, password, Toast }: IAuthDetailLogin) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userCredenital = await createUserWithEmailAndPassword(auth, email, password)
          const user = userCredenital.user;
          const userRef = doc(db, 'users', user.uid)
          const userDetail = {
               uid: user.uid, email: user.email, password, username: '',
               photoURL: '', phoneNumber: null, googleAuth: false,
               isActive: true, isAdmin: false, gender: '', address: '',
          }
          // * setting  the details into userscollection
          await setDoc(userRef, userDetail);
          dispatch({ type: Types.SIGNIN_SUCESS, payload: userDetail })
          Toast("Signup Success", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: to signInWithEmailandPassword
export const signIn = ({ email, password, Toast }: IAuthDetailLogin) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userCredenital = await signInWithEmailAndPassword(auth, email, password)
          const user = userCredenital.user;

          // * getting the document from server 
          const userRef = doc(db, 'users', user.uid);
          const userDetail = await getDoc(userRef);
          dispatch({ type: Types.SIGNIN_SUCESS, payload: userDetail })
          Toast("Login Success", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: to signOut
export const logout = (Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await signOut(auth)
          dispatch({ type: Types.SIGNOUT_SUCESS })
          Toast("Logout Success", ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}