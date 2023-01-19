import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { BsHandbagFill } from 'react-icons/bs'
import React from 'react'
import './ProductCard.css'
type Props = {}

const ProductCard = (props: Props) => {
     return (
          <Flex border={'0px'} flexDir='column' boxShadow={'lg'} >
               <Box w='100%' h='fit-content' border={'0px'} pos='relative' className='card-image-container'>
                    <Box display={'flex'} w='100%' h='auto' border={'0px'} className='card-images'>
                         <Tooltip label="Image Title" aria-label='A tooltip' >
                              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYbNiNtFIqeuXqN2__GaHH2Uzj_0TvxiGgw&usqp=CAU' minW='100%' h='300px' className='card-image-front' />
                         </Tooltip>
                         <Tooltip label="Image Title" aria-label='A tooltip' >
                              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYbNiNtFIqeuXqN2__GaHH2Uzj_0TvxiGgw&usqp=CAU' minW='100%' h='300px' className='card-image-back' />
                         </Tooltip>
                    </Box>
                    <Tooltip label="Rating & Review" aria-label='A tooltip'>
                         <Flex px='2' py='1' pos={'absolute'} bottom='7px' left={'7px'} align='center' gap='4px' fontWeight={'bold'} fontSize={'.78em'} bg='whiteAlpha.700' borderRadius={'2px'}>
                              <Text>4.5</Text>
                              <Text color={'cyan.500'}><AiFillStar /></Text>
                              <Text>|</Text>
                              <Text>2.1k</Text>
                         </Flex>
                    </Tooltip>
                    <Tooltip label="Wishlist" aria-label='A tooltip'>
                         <Flex pos='absolute' bg='whiteAlpha.600' top='7px' right='7px' justify={'center'} align='center' fontSize={'2em'} w='35px' h='35px' _hover={{ color: 'red.700' }} cursor='pointer' borderRadius={'50%'} border='px' p='1'>
                              <AiOutlineHeart />
                         </Flex>
                    </Tooltip>
                    <Tooltip label="Cart" aria-label='A tooltip'>
                         <Flex pos='absolute' bg='whiteAlpha.600' bottom='7px' right='7px' _hover={{ color: 'red.700' }} cursor='pointer' justify={'center'} align='center' fontSize={'1.4em'} borderRadius={'50%'} border='px' p='1.5'>
                              <BsHandbagFill />
                         </Flex>
                    </Tooltip>
               </Box >
               <Flex flexDir={'column'} p='2' gap={'5px'}>
                    <Tooltip label="Brand" aria-label='A tooltip'>
                         <Text fontWeight={'bold'}>ROADSTAR</Text>
                    </Tooltip>
                    <Tooltip label="description" aria-label='A tooltip'>
                         <Text fontSize={'.9em'}>Solid Round  Neck T-shirt</Text>
                    </Tooltip>
                    <Flex fontSize={'.8em'} gap='5px'>
                         <Tooltip label="price" aria-label='A tooltip'>
                              <Text fontWeight={'bold'}>Rs.149</Text>
                         </Tooltip>
                         <Tooltip label="mrp" aria-label='A tooltip'>
                              <Text color={'gray.500'} textDecoration={'line-through'}>Rs.499</Text>
                         </Tooltip>
                         <Tooltip label="70% oFF" aria-label='A tooltip'>
                              <Text color={'#E53E3E'}>(70 % OFF)</Text>
                         </Tooltip>
                    </Flex>
               </Flex>
          </Flex >
     )
}

export default ProductCard