import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import CartCard from '../../Components/Cards/CartCard/CartCard'
import ProductCard from '../../Components/Cards/ProductCard/ProductCard'

type Props = {}

const ShowProduct = (props: Props) => {
     return (
          <Grid display={'grid'} p='2' justifyContent='space-between' border={'0px'} w='100%' gridTemplateColumns={'repeat(4,1fr)'} gap='30px' gridTemplateRows={'repeat(3,400px)'}>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard /> 
          </Grid>
     )
}

export default ShowProduct