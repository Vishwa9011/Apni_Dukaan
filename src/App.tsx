import { Box, Button, Card } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch } from 'react-redux';
import './App.css';
import Application from './Application';
import UseToastMsg from './Custom-hooks/UseToastMsg';
import { auth, db } from './Firebase/FirebaseConfig';
import { signInWithGoogleAuth } from './Redux/Auth/Action.auth';
import { AUTH_ERROR, SIGNIN_SUCCESS } from './Redux/Auth/Types.auth';

function App() {
  const dispatch: Dispatch<any> = useDispatch()
  const { Toast, Type } = UseToastMsg();
  console.log('Toast: ', Toast);

  useEffect(() => {
    Toast("Welcome Robo's", Type.success)
    onAuthStateChanged(auth, (user) => {
      console.log('user: ', user);
      if (user) {
        getDoc(doc(db, 'users', user.uid))
          .then((res) => {
            console.log('res: ', res.data());
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data() })
          }).catch((err) => {
            dispatch({ type: AUTH_ERROR, payload: err })
          })
      }
    })
  }, [])

  const Login = () => {
    console.log("login")

    dispatch(signInWithGoogleAuth(Toast))
    console.log("login end")
  }

  return (
    <Box>
      <Button onClick={Login}>Auth</Button>
      <Application />
    </Box>
  )
}

export default App
