import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import React, { Dispatch } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IProduct, IUser } from '../../../Constants/Constant'
import UseToastMsg from '../../../Custom-hooks/UseToastMsg'
import { RootState } from '../../../Redux/store'
import { moveProductTocart, RemoveFromWishlist } from '../../../Redux/WishlistRedux/Action.wishlist'

interface IUserCred {
     userCredential: IUser
}


const WishlistCard = (props: IProduct) => {

     const { Toast } = UseToastMsg()
     const navigate = useNavigate()
     const dispatch: Dispatch<any> = useDispatch()
     const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth)
     const { id, brand, description, defaultImage, images, rating, price, mrp, discount, totalReview, category } = props;

     // todo: add the product into cart
     const RemoveFromWishListProduct = () => {
          if (!userCredential?.email) return navigate('/login')
          dispatch(RemoveFromWishlist(userCredential?.email, id, Toast))
     }

     // todo: add the product into cart
     const MoveToCartProduct = () => {
          if (!userCredential?.email) return navigate('/login')
          dispatch(moveProductTocart(props, userCredential?.email, Toast))
     }


     return (
          <Box boxShadow='lg' border={'0px'}>
               <Flex position={"relative"} h='320px'>
                    <Flex w='100%' h='100%'>
                         <Tooltip label={description} aria-label='A tooltip'>
                              <Image src={defaultImage} height={"100%"} w='100%' border={'0px'} />
                         </Tooltip>
                    </Flex>
                    <Tooltip label={"Remove from wishlist"} aria-label='A tooltip'>
                         <Box position={"absolute"} cursor='pointer' top={"10px"} right={"7px"} background={"white"} borderRadius={"50%"} bg='whiteAlpha.600' p='1' border={'1px'} borderColor='gray.200' onClick={RemoveFromWishListProduct}>
                              <AiOutlineClose />
                         </Box>
                    </Tooltip>
               </Flex>
               <Flex flexDir={'column'} p='4' gap={'5px'}>
                    <Tooltip label={description} aria-label='A tooltip'>
                         <Text fontSize={'1em'}>{description?.slice(0, 20)}...</Text>
                    </Tooltip>
                    <Flex fontSize={'.9em'} gap='5px'>
                         <Tooltip label={`price: ${price}`} aria-label='A tooltip'>
                              <Text fontWeight={'bold'}>Rs.{price}</Text>
                         </Tooltip>
                         <Tooltip label={`mrp: ${mrp}`} aria-label='A tooltip'>
                              <Text color={'gray.500'} textDecoration={'line-through'}>Rs.{mrp}</Text>
                         </Tooltip>
                         {'discount' && <Tooltip label={`discount: ${discount}% OFF`} aria-label='A tooltip'>
                              <Text color={'#E53E3E'}>({discount} % OFF)</Text>
                         </Tooltip>}
                    </Flex>
               </Flex>
               <Tooltip label={"Move to Cart"} aria-label='A tooltip'>
                    <Flex align={'center'} justify='center' cursor={'pointer'} border={"1px"} borderColor={"gray.200"} height={50} onClick={MoveToCartProduct}>
                         <Text background={"white"} color={"#E53E3E"} fontWeight={'semibold'} >MOVE TO BAG</Text>
                    </Flex>
               </Tooltip>
          </Box>
     )
}

export default WishlistCard