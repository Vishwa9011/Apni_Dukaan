import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';



// const SingleCard = () => {
const SingleCard = ({data}:any) => {

  // {img,title}=data;
  return (
    <Box>
      <Box >
        <Box w="100%" border={"1px solid blue"}>
            <Image w="100%" src="https://images.bewakoof.com/t320/men-s-blackweb-slinger-oversized-full-sleeve-t-shirt-568921-1673610910-1.jpg"/>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
      
          <Heading as="h3">Bewakoof</Heading>
          <AiOutlineHeart/>
        </Box>
        <Text>Men's Black Web...</Text>
        <Box display={"flex"} justifyContent="space-between">
          <Text>₹ 699</Text>
          <Text  textDecoration={'line-through'}>1499</Text>
          <Text>53%</Text>
   
    </Box>
      </Box>
    </Box>
  )
}

export default SingleCard