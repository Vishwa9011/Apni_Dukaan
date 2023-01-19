import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const NewPassword = (props: Props) => {
     const [email, setEmail] = React.useState<string>('')

     return (
          <Box bg='#fceeeb' h='100vh' w='100%' display={'flex'} justifyContent='center' alignItems={'center'}>
               <Box w='380px' border={'1px solid transparent'} bg='whiteAlpha.900' boxShadow={'lg'} p='20px' borderRadius={'10px'}>
                    <FormControl id="password" isRequired>
                         <FormLabel>New Password</FormLabel>
                         <Input type="email" value={email} placeholder='New Password' onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <Button mt='20px' className='btn-clicked' mb='15px' backgroundColor={"#E53E3E"} colorScheme={"#E53E3E"} color={"white"} width={"100%"} onClick={() => { }}>Set New Password</Button>
               </Box>
          </Box>
     )
}

export default NewPassword