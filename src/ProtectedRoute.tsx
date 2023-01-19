import React from 'react'
// import type { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from './Redux/store';

interface Ichildren {
     children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Ichildren) => {

     const navigate = useNavigate();
     const location = useLocation()
     console.log('location: ', location);
     const { userCredential, authenticated } = useSelector((store: RootState) => store.auth);

     if (authenticated) {
          return navigate('/login')
     }

     return children;
}

export default ProtectedRoute;