import { Box } from '@chakra-ui/react'
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import UseToastMsg, { ToastType } from '../../Custom-hooks/UseToastMsg';
import { db } from '../../Firebase/FirebaseConfig';
import { RootState } from '../../Redux/store';
import * as Types from '../../Redux/ShopRedux/Types.shop'
import { getDataShop } from '../../Redux/ShopRedux/Action.shop';


const Shop = () => {

     const param = useParams();
     const { Toast } = UseToastMsg();
     const dispatch: Dispatch<any> = useDispatch();
     const { data, loading, error } = useSelector((store: RootState) => store.shop)


     useEffect(() => {
          dispatch(getDataShop(param.id, Toast))
     }, [param])



     if (loading) return <h1>Loading....</h1>
     if (error) return <h1>Error....</h1>

     return (
          <Box>
               Shop
          </Box>
     )
}

export default Shop