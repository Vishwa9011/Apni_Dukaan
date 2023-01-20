import { Box, Button, Card } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Application from './Application';
import Address from './Components/Address/Address';

import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import UseToastMsg from './Custom-hooks/UseToastMsg';
import UseToggle from './Custom-hooks/UseToggle';
import { auth, db } from './Firebase/FirebaseConfig';
import { signInWithGoogleAuth } from './Redux/Auth/Action.auth';
import { AUTH_ERROR, SIGNIN_SUCCESS } from './Redux/Auth/Types.auth';
import { searchInDatabase } from './Redux/ShopRedux/Action.shop';
import { RootState } from './Redux/store';

function App() {
  // const { Toast, Type } = UseToastMsg();
  const dispatch: Dispatch<any> = useDispatch()
  // const { searchData } = useSelector((store: RootState) => store.shop)
  const [isOpen, toggleSearchBar]: any = UseToggle(false)
  const [IsNav, setIsNav] = UseToggle(true)

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, 'users', user.uid))
          .then((res) => {
            // console.log('res: ', res.data());
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data() })
          }).catch((err) => {
            dispatch({ type: AUTH_ERROR, payload: err })
          })
      }
    })

    // todo: cleanup function
    return unsubsribe;
  }, [])


  return (
    <Box position={'relative'}>

      {isOpen && <SearchBar toggle={toggleSearchBar} />}
      {IsNav && <Navbar ToggleSearchBar={toggleSearchBar} />}
      <Application /> 


 
    </Box>
  )
}

export default App
