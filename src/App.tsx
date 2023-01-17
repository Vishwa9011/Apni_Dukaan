import { Box, Button, Card } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch } from 'react-redux';
import './App.css';
import Application from './Application';
import UseToastMsg from './Custom-hooks/UseToastMsg';
import { auth } from './Firebase/FirebaseConfig';
import { signInWithGoogleAuth } from './Redux/Auth/Action.auth';

function App() {
  const dispatch: Dispatch<any> = useDispatch()
  const { Toast, Type } = UseToastMsg();
  console.log('Toast: ', Toast);

  useEffect(() => {
    Toast("Welcome Robo's", Type.success)
    // onAuthStateChanged(auth, (user) => {
    //   console.log('user: ', user);
    // })
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
