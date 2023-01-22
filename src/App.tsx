import { Box, Button, Card, } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Application from './Application';
import Address from './Pages/Address/Address';

import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import UseToastMsg from './Custom-hooks/UseToastMsg';
import UseToggle from './Custom-hooks/UseToggle';
import { auth, db } from './Firebase/FirebaseConfig';
import { getUserCredential, signInWithGoogleAuth } from './Redux/Auth/Action.auth';
import { AUTH_ERROR, SIGNIN_SUCCESS } from './Redux/Auth/Types.auth';

function App() {
  const { Toast, Type } = UseToastMsg();
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user: ', user);
        dispatch(getUserCredential(user, Toast))
      }
    })

    // todo: cleanup function
    return unsubsribe;
  }, [])


  return (
    <Box position={'relative'}>
     
      <Application />
    </Box>
  )
}

export default App
