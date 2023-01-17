import { Button } from '@chakra-ui/react';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../Constants/Constant';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { AddProductToCart, DeleteProductCart, getCartProduct, UpdateQty } from '../../Redux/CartRedux/Action.cart';
import { RootState } from '../../Redux/store';

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
          <div>Cart
               <Button onClick={() => UpdateQtyOfProduct(-1, product)}>Add Product</Button>
          </div>
     )
}

export default React.memo(Cart)