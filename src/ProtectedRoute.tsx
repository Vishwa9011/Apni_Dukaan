import React, { useEffect } from 'react'
// import type { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from './Redux/store';

interface Ichildren {
     children: any;
}

const ProtectedRoute = ({ children }: Ichildren) => {
     const location = useLocation()
     console.log('location: ', location);
     const isAuth = JSON.parse(localStorage.getItem('IsAuthAD') || 'false');
     const { userCredential, authenticated } = useSelector((store: RootState) => store.auth);

     if (!isAuth) {
          return <Navigate to='/login' state={{ prevURL: location.pathname }} />
     }

     return children
}

export default ProtectedRoute;