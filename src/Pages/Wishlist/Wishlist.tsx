import { getWishlistProducts } from '../../Redux/WishlistRedux/Action.wishlist';
import WishlistCard from '../../Components/Cards/WishlistCard/WishlistCard';
import { Box, Flex, Grid, Image, Text, } from '@chakra-ui/react'
import { IProduct, IUser } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import Navbar from '../../Components/Navbar/Navbar';
import React, { Dispatch, useEffect } from 'react'
import { RootState } from '../../Redux/store';
import { Link } from 'react-router-dom';

interface IUserCred {
     userCredential: IUser
     loading: boolean
}


const Wishlist = () => {
     const { Toast } = UseToastMsg()
     const dispatch: Dispatch<any> = useDispatch();
     const { wishlist, loading: wishlistLoading } = useSelector((store: RootState) => store.wishlist)
     const { loading: cartLoading } = useSelector((store: RootState) => store.cart)
     const { userCredential, loading }: IUserCred = useSelector((store: RootState) => store.auth)

     useEffect(() => {
          dispatch(getWishlistProducts(userCredential?.email, Toast))
     }, [userCredential])

     return (
          <>
               {/* loading */}
               {(loading || cartLoading || wishlistLoading) && <Loader />}


               {/* Navbar */}
               <Navbar />

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

               {/* Footer */}
               <Footer />
          </>
     )
}

export default Wishlist