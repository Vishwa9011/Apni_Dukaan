import { Box, Card } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import './App.css';
import Application from './Application';
import UseToastMsg from './Custom-hooks/UseToastMsg';

function App() {

  const { Toast, Type } = UseToastMsg();
  console.log('Toast: ', Toast);

  useEffect(() => {
    Toast("Welcome Robo's", Type.success)
  }, [])

  return (
    <Box>
      <Application />
    </Box>
  )
}

export default App
