import { confirmPasswordReset, createUserWithEmailAndPassword, deleteUser, EmailAuthProvider, linkWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { Dispatch } from "redux"
import { auth, db, provider, storage } from "../../Firebase/FirebaseConfig"
import { IAddress, IAuthDetailLogin, IToastProps, IUser, IUserProfileUpdate } from "../../Constants/Constant"
import { deleteDoc, doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import * as Types from './Types.auth'
import { ToastType } from './../../Custom-hooks/UseToastMsg';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'

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
               gender: '', address: '', password: resData?.password ? resData.password : user.uid, timeStamp: Date.now()
          }

          if ((!resData || !resData?.googleAuth) && user?.email && auth?.currentUser) {
               // * setting the document into the database
               await setDoc(userRef, userDetail);
               // todo: linking two accounts together
               const credential = EmailAuthProvider.credential(user.email, resData?.password ? resData.password : user.uid);
               const linkedCred = await linkWithCredential(auth.currentUser, credential);
               console.log('linkedCred: ', linkedCred);
          } else {
               await updateDoc(userRef, { isActive: true })
          }
          Toast("Login Success", ToastType.success)
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
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
               timeStamp: Date.now()
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
          await updateDoc(userRef, { isActive: true });
          getUserCredential(user, Toast) // todo: to get the details of user
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Login Success", ToastType.success)
          navigate(location?.state?.prevURL ? location.state.prevURL : '/')
          localStorage.setItem("IsAuthAD", 'true')
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: to signOut
export const logout = (uid: string, Toast: Function) => async (dispatch: Dispatch) => {
     console.log('uid: ', uid);
     dispatch({ type: Types.AUTH_LOADING });
     try {
          console.log('logout')
          await signOut(auth)
          const userRef = doc(db, 'users', uid)
          await updateDoc(userRef, { isActive: false })
          dispatch({ type: Types.SIGNOUT_SUCCESS })
          Toast("Logout Success", ToastType.success)
          localStorage.setItem("IsAuthAD", 'false')
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          // Toast(error, ToastType.error)
     }
}


// todo: forgetPasswordSend the Email
export const ForgotPasswordSendEmail = (email: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await sendPasswordResetEmail(auth, email, {
               url: 'https://apnidukaan-9a863.web.app/login'
          })
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Reset password email has been sent", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: forgetPasswordSend the Email
export const SetNewPassword = (obbCode: any, newPassword: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await confirmPasswordReset(auth, obbCode, newPassword)
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Password has been reset.", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}


// todo: to get userCredentital
export const getUserCredential = (user: any, Toast: Function) => async (dispatch: Dispatch) => {
     const userRef = doc(db, 'users', user.uid);
     const unsub = onSnapshot(userRef, (snapShot) => {
          const data = snapShot.data()
          dispatch({ type: Types.SIGNIN_SUCCESS, payload: data })
     }, (err) => {
          console.log('err: ', err);
          Toast(err, ToastType.error)
     })

     // cleanup
     return unsub;
}

// todo: DeleteUser
export const DeleteUserFromServer = (user: any, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          await deleteUser(user)
          await deleteDoc(doc(db, 'users', user.uid))
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("User has been Deleted", ToastType.success)
     } catch (error) {
          dispatch({ type: Types.AUTH_ERROR, payload: error })
          Toast(error, ToastType.error)
     }
}

// todo: AddAddressUserProfile
export const AddAddressUserProfile = (address: IAddress, userId: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userRef = doc(db, `users`, userId)
          await updateDoc(userRef, { address });
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Address successfully added.", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR })
          Toast("Failed to add address.", ToastType.error)
     }
}

// todo: RemoveAddress from user profile
export const RemoveAddressUserProfile = (address: IAddress, userId: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userRef = doc(db, `users`, userId)
          await updateDoc(userRef, { address: '' });
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Address successfully removed.", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR })
          Toast("Failed to add address.", ToastType.error)
     }
}

// todo:update userProfile Information
export const updateProfileInfo = (info: IUserProfileUpdate, user: IUser, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userRef = doc(db, `users`, user.uid)
          await updateDoc(userRef, { ...info });
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Profile has been updated successfully", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR })
          Toast("Failed to add address.", ToastType.error)
     }
}


// todo: updateProfilePhoto
export const updateProfilePhoto = (file: any, user: IUser, Toast: Function) => async (dispatch: Dispatch) => {
     console.log("upload check")
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const storageRef = ref(storage, `images/${Date.now() + user.email.split('@')[0]}`)
          // todo: upload on storage;
          uploadBytes(storageRef, file).then((snapShot) => {
               getDownloadURL(snapShot.ref).then((url) => {
                    const userRef = doc(db, 'users', user.uid);
                    updateDoc(userRef, { photoURL: url }).then(() => {
                         dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
                         Toast("Profile photo has been updated successfully", ToastType.success);
                    })
               })
          })
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR })
          Toast("Failed to add address.", ToastType.error)
     }
}

// todo: remove the profile photo
export const RemoveProfilePhoto = (userId: string, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.AUTH_LOADING });
     try {
          const userRef = doc(db, `users`, userId)
          await updateDoc(userRef, { photoURL: '' });
          dispatch({ type: Types.AUTH_OPERATION_SUCCESS })
          Toast("Profile photo has been removed successfully", ToastType.success);
     } catch (error) {
          console.log('error: ', error);
          dispatch({ type: Types.AUTH_ERROR })
          Toast("Failed to add address.", ToastType.error)
     }
}