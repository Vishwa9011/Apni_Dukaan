import { createUserWithEmailAndPassword, deleteUser, EmailAuthProvider, linkWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { Dispatch } from "redux"
import { auth, db, provider } from "../../Firebase/FirebaseConfig"
import { IAuthDetailLogin, IToastProps, IUser } from "../../Constants/Constant"
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import * as Types from './Types.auth'
import { ToastType } from './../../Custom-hooks/UseToastMsg';


// https://www.youtube.com/watch?v=MsDjbWUn3IE
// https://firebase.google.com/docs/auth/web/account-linking
// todo: to signInWithGoogle
export const signInWithGoogleAuth = (Toast: Function, navigate: Function, location: any) => async (dispatch: Dispatch) => {
     console.log('location: ', location);
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userCredential = await signInWithPopup(auth, provider)
          const user = userCredential.user;

          const userRef = doc(db, 'users', user.uid)
          const res = await getDoc(userRef);
          const resData = res.data();

          const userDetail = {
               uid: user.uid, username: user.displayName, email: user.email, photoURL: user.photoURL,
               phoneNumber: user.phoneNumber, googleAuth: true, isActive: true, isAdmin: false,
               gender: '', address: '', password: resData?.password ? resData.password : user.uid, timeStamp: new Date()
          }

          if ((!resData || !resData?.googleAuth) && user?.email && auth?.currentUser) {
               // * setting the document into the database
               await setDoc(userRef, userDetail);
               // todo: linking two accounts together
               const credential = EmailAuthProvider.credential(user.email, resData?.password ? resData.password : user.uid);
               const linkedCred = await linkWithCredential(auth.currentUser, credential);
               console.log('linkedCred: ', linkedCred);
          }
          Toast("Login Success", ToastType.success)
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: userDetail })
          localStorage.setItem("IsAuthAD", 'true') //todo: setting authentication inside the user
          navigate(location?.state?.prevURL ? location.state.prevURL : '/') // todo: navigating to the previous page
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}


// todo: to signUpWithEmailandPassword
export const signUp = ({ email, password, Toast, navigate, location }: IAuthDetailLogin) => async (dispatch: Dispatch) => {
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
          localStorage.setItem("IsAuthAD", 'true')
          navigate(location?.state?.prevURL ? location.state.prevURL : '/')
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: to signInWithEmailandPassword
export const signIn = ({ email, password, Toast, navigate, location }: IAuthDetailLogin) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userCredenital = await signInWithEmailAndPassword(auth, email, password)
          const user = userCredenital.user;

          // * getting the document from server 
          const userRef = doc(db, 'users', user.uid);
          const userDetail = await getDoc(userRef);
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: userDetail.data() })
          Toast("Login Success", ToastType.success)
          navigate(location?.state?.prevURL ? location.state.prevURL : '/')
          localStorage.setItem("IsAuthAD", 'true')
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
          if (auth.currentUser?.email) {
               const userRef = doc(db, 'users', auth.currentUser?.uid)
               await updateDoc(userRef, { IsActive: false })
          }
          dispatch({ type: Types.SIGNOUT_SUCCESS })
          Toast("Logout Success", ToastType.success)
          localStorage.setItem("IsAuthAD", 'false')
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
          await deleteDoc(db, 'users', user.uid)
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("User has been Deleted", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}