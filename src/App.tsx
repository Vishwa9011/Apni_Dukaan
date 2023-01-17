import { Box } from '@chakra-ui/react';
import React from 'react'
import './App.css';
import Application from './Application';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <Box>
      <Navbar/>
      <Application />
    </Box>
  )
}

export default App
