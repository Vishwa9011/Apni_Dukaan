import { Box, Flex, Grid, Image, Text, } from '@chakra-ui/react'
import React, { Dispatch, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import WishlistCard from '../../Components/Cards/WishlistCard/WishlistCard';
import { IProduct, IUser } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { RootState } from '../../Redux/store';
import { getWishlistProducts } from '../../Redux/WishlistRedux/Action.wishlist';

interface IUserCred {
     userCredential: IUser
}


const Wishlist = () => {
     const { Toast } = UseToastMsg()
     const dispatch: Dispatch<any> = useDispatch();
     const { wishlist } = useSelector((store: RootState) => store.wishlist)
     const { userCredential }: IUserCred = useSelector((store: RootState) => store.auth)

     useEffect(() => {
          dispatch(getWishlistProducts(userCredential?.email, Toast))
     }, [userCredential])


     return (
          <Box w='95%' m='auto'>
               {wishlist.length ?
                    <>
                         <Box>
                              <Text fontSize={'2rem'} fontWeight='semibold'>My Wishlist</Text>
                         </Box>
                         <Grid gridTemplateColumns={'repeat(5,1fr)'} gridTemplateRows='repeat(2,auto)' mt='30px' gap='30px'>
                              {wishlist.map((product: IProduct) => (
                                   <WishlistCard {...product} key={product.id} />
                              ))}
                         </Grid>
                    </>
                    :
                    <>
                         <Flex flexDir={'column'} justify='center' align={'center'}>
                              <Flex>
                                   <Image src='/Images/wishlist_empty.png' />
                              </Flex>

                              <Flex>
                                   <Link to='/shop/men'>
                                        <Text fontSize={'1.7em'} fontWeight='semibold' p='2' borderRadius={'4px'} color='#E53E3E' border={'2px'} borderColor={'#E53E3E'}>Continue Shopping</Text>
                                   </Link>
                              </Flex>
                         </Flex>
                    </>
               }
          </Box>
     )
}

export default Wishlist