import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
     return (
          <Box h='100vh' pos='fixed' top='0' left={0} w='100%' zIndex={'1000'}>
               <Flex w='100%' h='100%' align={'center'} justify='center' pos='absolute'>
                    <Spinner thickness='4px' speed='0.65s' zIndex={'1001'} emptyColor='gray.200' opacity={'1'} color='red.500' size='xl' />
               </Flex>
               <Box w='100%' h='100%' opacity={'.3'} bg='gray.700'></Box>
          </Box>
     )
}

export default Loader