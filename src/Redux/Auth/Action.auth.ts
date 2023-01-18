import { createUserWithEmailAndPassword, deleteUser, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
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

          const userDetail = {
               uid: user.uid, username: user.displayName, email: user.email, photoURL: user.photoURL,
               phoneNumber: user.phoneNumber, googleAuth: true, isActive: true, isAdmin: false,
               gender: '', address: '', password: null, timeStamp: new Date()
          }

          // * setting the document into the database
          const userRef = doc(db, 'users', user.uid)
          await setDoc(userRef, userDetail);
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: userDetail })
          Toast("Login Success", ToastType.success)
     } catch (error) {
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
               timeStamp: new Date()
          }
          // * setting  the details into userscollection
          await setDoc(userRef, userDetail);
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: userDetail })
          Toast("Signup Success", ToastType.success)
     } catch (error) {
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
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: userDetail })
          Toast("Login Success", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: to signOut
export const logout = (Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await signOut(auth)
          dispatch({ type: Types.SIGNOUT_SUCCESS })
          Toast("Logout Success", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}


// todo: forgetPasswordSend the Email
export const ForgotPasswordSendEmail = (email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await sendPasswordResetEmail(auth, email)
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Reset password email has been sent", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: DeleteUser
export const DeleteUserFromServer = (user: any, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await deleteUser(user)
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("User has been Deleted", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}