import { getWishlistProducts } from '../../Redux/WishlistRedux/Action.wishlist';
import WishlistCard from '../../Components/Cards/WishlistCard/WishlistCard';
import { Box, Flex, Grid, Image, Text, } from '@chakra-ui/react'
import { IOrdersProduct, IProduct, IUser } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';
import Navbar from '../../Components/Navbar/Navbar';
import React, { Dispatch, useEffect } from 'react'
import { RootState } from '../../Redux/store';
import { Link } from 'react-router-dom';
import OrdersCard from '../../Components/Cards/OrdersCard/OrdersCard';
import { getOrdersProducts } from '../../Redux/OrderRedux/Action.Order';

interface IUserCred {
     userCredential: IUser
     loading: boolean
}


const Orders = () => {
     const { Toast } = UseToastMsg()
     const dispatch: Dispatch<any> = useDispatch();
     const { orders, loading: ordersLoading } = useSelector((store: RootState) => store.order)
     const { loading: cartLoading } = useSelector((store: RootState) => store.cart)
     const { userCredential, loading }: IUserCred = useSelector((store: RootState) => store.auth)

     useEffect(() => {
          dispatch(getOrdersProducts(userCredential?.email, Toast))
     }, [userCredential])



     return (
          <>
               {/* loading */}
               {(loading || cartLoading || ordersLoading) && <Loader />}

               {/* Navbar */}
               <Navbar />

               <Box w='95%' m='auto'>
                    {orders.length ?
                         <>
                              <Box>
                                   <Text fontSize={'2rem'} fontWeight='semibold'>My Orders</Text>
                              </Box>
                              <Grid gridTemplateColumns={'repeat(5,1fr)'} gridTemplateRows='repeat(2,auto)' mt='30px' gap='30px'>
                                   {orders.map((product: IOrdersProduct) => (
                                        <OrdersCard {...product} key={product.id} />
                                   ))}
                              </Grid>
                         </>
                         :
                         <>
                              <Flex flexDir={'column'} justify='center' align={'center'} h='90vh' p='20'>
                                   <Flex w='80%' m='auto' flexDir={'column'} align='center' justify={'center'} my='5'>
                                        <Image src='/Images/orders_empty.png' />
                                        <Text fontSize={'2em'} fontWeight='semibold' opacity={'.8'}>There is no order yet.</Text>
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

export default Orders