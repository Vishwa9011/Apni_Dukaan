import React, { useState } from 'react'

const UseToggle = () => {
     const [state, setState] = useState<boolean>(false);
     const toggle = () => {
          setState(v => !v)
     }
     return [state, toggle]
}

export default UseToggle