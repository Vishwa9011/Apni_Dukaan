import { Box, Text, Image, Input, Button } from '@chakra-ui/react'
import React from 'react'
import UseToggle from '../../Custom-hooks/UseToggle'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'
import Signup from './Signup'
const Login = () => {

  const containerRef = React.useRef<HTMLDivElement>(null)
  const mainContainerRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, ToggleSignIn]: any = UseToggle(true)

  const scrollPage = (value: number) => {
    if (!containerRef.current || !mainContainerRef.current) return
    const width = containerRef?.current?.clientWidth;
    mainContainerRef.current.scrollLeft += (value * width)
  }

  return (
    <Box border={"1px solid #fceeeb"} backgroundColor={"#fceeeb"} h='max-content'>
      <Box width={"450px"} marginTop={"50px"} marginLeft={"33%"} backgroundColor={"white"}>
        <Box height={"auto"}>
          <Image src="https://assets.myntassets.com/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" alt="Login image" />
        </Box>
        <Box display='flex' overflow={'hidden'} ref={mainContainerRef}>
          {isOpen ?
            <>
              <Box px='40px' minW='100%' m='auto' ref={containerRef}>
                <SignIn scrollPage={scrollPage} toggle={ToggleSignIn} />
              </Box>
              <Box px='40px' minW='100%' m='auto' ref={containerRef}>
                <Signup scrollPage={scrollPage} />
              </Box>
            </>
            :
            <ForgotPassword toggle={ToggleSignIn} />}
        </Box>
      </Box>

    </Box>
  )
}

export default Login



