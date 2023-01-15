import React from 'react'

interface Ichildren {
     children: React.ReactNode
}

const ProtectedRoute = ({ children }: Ichildren) => {
     return children;
}

export default ProtectedRoute