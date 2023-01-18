import React, { useState } from 'react'

const UseToggle = () => {
     const [state, setState] = useState(false);
     const toggle = (): void => {
          setState(v => !v)
     }

     return [state, toggle]
}

export default UseToggle