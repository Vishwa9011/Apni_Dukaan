import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import apnidukan from '../apnidukan.png'
const Studio = () => {
  return (
    <Flex flexDir={"column"} alignItems="center" justifyContent={"center"} boxShadow='lg' p='20px'>
        <Flex alignItems="center" justifyContent={"center"} py="10">
            <Image w={"100px"} src={apnidukan} alt='apnidukan'/>
            <Heading fontFamily={"sans-serif"} color={"black"} size={"xl"}>Studio</Heading>
        </Flex>
        <Box w={"80%"}>
            <Image src='https://hips.hearstapps.com/hmg-prod/images/spring-2022-trends-1642786776.jpg' alt='img' />
        </Box>
    </Flex>
  )
}

export default Studio