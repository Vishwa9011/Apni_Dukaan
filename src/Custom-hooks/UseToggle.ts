import React, { useState } from 'react'

interface IProps {

}

const UseToggle = (init?: boolean) => {
     const [state, setState] = useState(init ?? false);
     const toggle = (value?: boolean): void => {
          if (value === null) {
               setState(value)
          } else {
               setState(v => !v)
          }
     }
     return [state, toggle]
}

export default UseToggle