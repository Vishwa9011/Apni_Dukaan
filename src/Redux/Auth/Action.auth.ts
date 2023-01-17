import { signInWithPopup } from "firebase/auth"
import { Dispatch } from "redux"
import { auth, provider } from "../../Firebase/FirebaseConfig"
import { IAuthDetailLogin } from "../../Constants/Constant"
// todo: to signInWithGoogle
export const signInWithGoogleAuth = () => async (dispatch: Dispatch) => {
     signInWithPopup(auth, provider)
          .then(() => {
               
          }).catch(() => {

          })
}

// todo: to signUpWithEmailandPassword
export const signUp = ({ email, password }: IAuthDetailLogin) => async (dispatch: Dispatch) => {

}

// todo: to signInWithEmailandPassword
export const signIn = ({ email, password }: IAuthDetailLogin) => async (dispatch: Dispatch) => {

}

// todo: to signOut
export const logout = () => async (dispatch: Dispatch) => {

}