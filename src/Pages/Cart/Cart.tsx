import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { AddProductToCart, DeleteProductCart, getCartProduct, UpdateQty } from '../../Redux/CartRedux/Action.cart';
import { RootState } from '../../Redux/store';
import apnidukan from "./apnidukan.png"
import secure from './secure.png'
const Cart = () => {
     const dispatch: Dispatch<any> = useDispatch();
     const { Toast } = UseToastMsg();
     const { cart } = useSelector((store: RootState) => store.cart)
     const { userCredential } = useSelector((store: RootState) => store.auth)
     console.log('cart: ', cart);

     // todo: updateQtyOfProduct
     const UpdateQtyOfProduct = (value: number, product: IProduct) => {
          if (product["qty"]) {
               product = { ...product, qty: product.qty + value }
          } else {
               product = { ...product, qty: 1 }
          }
          dispatch(UpdateQty(product, userCredential?.email, Toast))
     }


     // todo: deleteProduct
     const deleteProducFromCart = (id: string) => {
          dispatch(DeleteProductCart(id, userCredential?.email, Toast))
     }


     useEffect(() => {
          dispatch(getCartProduct(userCredential?.email, Toast))
     }, [userCredential])

     const addProduct = () => {
          dispatch(AddProductToCart(product, userCredential?.email, Toast))
     }


     const product = {
          brand: "HRX by Hrithik Roshan", category: "man", defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYbNiNtFIqeuXqN2__GaHH2Uzj_0TvxiGgw&usqp=CAU", description: "Men Yellow Printed Cotton Pure Cotton T-shirt",
          discount: 55, id: "3pgUUt3pHghKt1WsBsIe", images: { image2: '', image3: '', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8jWdbleNDhr6VhGWxXUcweasX_BfhLdiBA&usqp=CAU' }
          , mrp: 800, qty: 1, price: 314, rating: 4, totalReview: "Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look."
     }


     return (
          <div>
               {/* <Button onClick={() => UpdateQtyOfProduct(-1, product)}>Add Product</Button> */}
               <Box  m={"auto"} display={"flex"} borderBottom="1px solid gray" h={"80px"} justifyContent="space-around" alignItems={"center"}>
                    <Box>
                         <Image w={"80px"} src={apnidukan} alt='apnidukan' />
                    </Box>
                    <Text fontSize={"xs"} fontWeight="bolder" color={"gray.600"} letterSpacing="widest"> <span style={{color:"#339933",}}>BAG</span> -------- ADDRESS -------- PAYMENT</Text>
                    <Flex justifyContent={"center"} alignItems="center">
                         <Image w="29px" src={secure} alt="secure" />
                         <Text fontSize={"xs"} fontWeight="bolder" color={"gray.600"} letterSpacing="widest">100% SECURE</Text>
                    </Flex>
               </Box>
               <Flex justifyContent={"center"} alignItems="center" rounded={"base"}  borderBottom="1px solid gray" h="50px">
                    <Text color={"gray.600"} letterSpacing="wide" >Sale End In <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>03</span><span style={{fontSize:"13px"}}>Hrs:</span> <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>40</span><span style={{fontSize:"13px"}}>Min:</span> <span style={{color:"#ff4d4d", fontSize:"20px", fontWeight:"bold"}}>24</span><span style={{fontSize:"13px"}}>Sec</span> </Text>
               </Flex>
               
          </div>
     )
}

export default React.memo(Cart)