import { Box, Image, Flex, } from '@chakra-ui/react'
import UseToggle from '../../Custom-hooks/UseToggle'
import Navbar from '../../Components/Navbar/Navbar'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'
import Signup from './Signup'
import React from 'react'
import './Login.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import Loader from '../../Components/Loader/Loader'
import { IUser } from '../../Constants/Constant'
import { useNavigate } from 'react-router-dom'


interface IUserCred {
  userCredential: IUser;
  loading: boolean
}

const Login = () => {
  const navigate = useNavigate()
  const [isOpen, ToggleSignIn]: any = UseToggle(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mainContainerRef = React.useRef<HTMLDivElement>(null);
  const { userCredential, loading }: IUserCred = useSelector((store: RootState) => store.auth)

  const scrollPage = (value: number) => {
    if (!containerRef.current || !mainContainerRef.current) return
    const width = containerRef?.current?.clientWidth;
    mainContainerRef.current.scrollLeft += (value * width)
  }

  if (userCredential?.email) {
    navigate('/')
  }

  return (
    <Box>
      {/* loading */}
      {loading && <Loader />}
      <Navbar />
      <Flex align={'center'} justify='center' border={"1px solid #fceeeb"} backgroundColor={"#fceeeb"} h={'full'} className='login'>
        <Box maxW={{ base: "100%", sm: "70%", md: "50%", lg: '35%' }} margin='auto' backgroundColor={"white"} h='max-content'>
          <Flex height={"190px"}>
            <Image src="https://assets.myntassets.com/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" alt="Login image" w='100%' h='auto' />
          </Flex>
          <Flex w='100%' overflow={'hidden'} ref={mainContainerRef} h='100%'>
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Login



