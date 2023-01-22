import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { Dispatch } from 'react'
import { SetNewPassword } from '../../Redux/Auth/Action.auth'
import UseToastMsg from '../../Custom-hooks/UseToastMsg'

type Props = {}

const useQuerry = () => {
     const location = useLocation();
     return new URLSearchParams(location.search)
}

const NewPassword = (props: Props) => {
     const query = useQuerry();
     const { Toast } = UseToastMsg()
     const oobCode = query.get('oobCode');
     const dispatch: Dispatch<any> = useDispatch();
     const [password, setpassword] = React.useState<string>('');

     //  todo; reset the password
     const ResetPassword = () => {
          dispatch(SetNewPassword(oobCode, password, Toast))
     }

     return (
          <Box bg='#fceeeb' h='100vh' w='100%' display={'flex'} justifyContent='center' alignItems={'center'}>
               <Box w='380px' border={'1px solid transparent'} bg='whiteAlpha.900' boxShadow={'lg'} p='20px' borderRadius={'10px'}>
                    <FormControl id="password" isRequired>
                         <FormLabel>New Password</FormLabel>
                         <Input type="password" value={password} placeholder='New Password' onChange={(e) => setpassword(e.target.value)} />
                    </FormControl>
                    <Button onClick={ResetPassword} mt='20px' className='btn-clicked' mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} >Set New Password</Button>
               </Box>
          </Box>
     )
}

export default NewPassword