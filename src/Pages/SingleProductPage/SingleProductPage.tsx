import { Box, Text, Image, Button, Flex, Grid } from '@chakra-ui/react'
import React, { Dispatch, useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { BsHandbagFill } from 'react-icons/bs';
import { BsTruck, } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaAmazonPay } from 'react-icons/fa';
import { CgArrowsExchange } from 'react-icons/cg';
import { TbListDetails } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { IProduct, IUser } from '../../Constants/Constant';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import PageNotFound from '../Page404/PageNotFound';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductToCart } from '../../Redux/CartRedux/Action.cart';
import UseToastMsg from '../../Custom-hooks/UseToastMsg';
import { RootState } from '../../Redux/store';
import { addProductToWishlist } from '../../Redux/WishlistRedux/Action.wishlist';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';

type Props = {}

const menSize = ['S', 'M', 'L', 'XL', 'XXL']

const SingleProductPage = () => {
    const { id } = useParams();
    const { Toast } = UseToastMsg()
    const dispatch: Dispatch<any> = useDispatch();
    const [product, setProduct] = useState<any>();
    const [loading, setLoading] = useState(false)
    const { userCredential }: { userCredential: IUser, loading: boolean } = useSelector((store: RootState) => store.auth);
    const { loading: cartLoading } = useSelector((store: RootState) => store.cart);
    const { loading: wishlistLoading } = useSelector((store: RootState) => store.wishlist);
    const [prCategory, productId]: any = id?.trim().split('-');


    // todo:addtocart
    const AddToCart = () => {
        dispatch(AddProductToCart(product, userCredential?.email, Toast))
    }

    // todo:addtowwishlist
    const AddToWishlist = () => {
        dispatch(addProductToWishlist(product, userCredential?.email, Toast))
    }

    useEffect(() => {
        setLoading(true)
        if (prCategory && productId) {
            const productRef = doc(db, `shop/${prCategory}/${prCategory}Data`, productId)
            getDoc(productRef)
                .then((res) => {
                    setProduct(res.data())
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [])

    // if (!product?.brand) return <PageNotFound />

    return (

        <>
            {/* loading */}
            {(loading || cartLoading || wishlistLoading) && <Loader />}

            {/* Navbar */}
            <Navbar />

            <Box w='95%' m='auto'>
                <Box height={50} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Flex gap='5px' fontWeight={'semibold'} my='4'>
                        <Link to='/'>
                            <Text _hover={{ color: 'red.500' }}>🏠 Home</Text>
                        </Link>
                        <Text>/</Text>
                        <Link to={`/product-detail/${prCategory}-${productId}`}>
                            <Text _hover={{ color: 'red.500' }}>Product-Detail</Text>
                        </Link>
                        <Text>/</Text>
                        <Link to={`/product-detail/${prCategory}-${productId}`}>
                            <Text _hover={{ color: 'red.500' }} textTransform='capitalize'>{prCategory}</Text>
                        </Link>
                        <Text>/</Text>
                        <Link to={`/product-detail/${prCategory}-${productId}`}>
                            <Text _hover={{ color: 'red.500' }} textTransform='capitalize'>{productId}</Text>
                        </Link>
                    </Flex>
                </Box>
                <Box border={"0"} height={"fit-content"} display={"flex"}>
                    <Grid gridTemplateColumns={'repeat(2,1fr)'} gridTemplateRows='repeat(2,500px)' gap='20px' width={"57%"} justifyContent={"space-around"}>
                        <Flex align={'center'} justify='center' border={"0px"} w='100%' h=''>
                            <Image src={product?.defaultImage} w='100%' maxH='100%' />
                        </Flex>
                        <Flex align={'center'} justify='center' border={"0px"} w='100%' h=''>
                            <Image src={product?.images?.image1} w='100%' maxH='100%' />
                        </Flex>
                        {product?.images?.image2 &&
                            <Flex border={"0px"} w='100%' align={'center'} justify='center'>
                                <Image src={product?.images.image2} w='100%' maxH='100%' />
                        </Flex>}
                        {product?.images?.image3 &&
                            <Flex border={"0px"} w='100%' align={'center'} justify='center'>
                                <Image src={product?.images.image3} w='100%' maxH='100%' />
                        </Flex>}

                    </Grid>
                    <Box border={"0px solid red"} width={"43%"} height={"1200px"}>
                        <Box border={"0px solid red"} width={"97%"} height={"1200px"} marginLeft={"10px"} marginTop={"5"}>
                            <Box><Text fontSize={'1.7em'} textTransform='uppercase' opacity={'.8'} fontWeight={'semibold'}>{product?.brand}</Text></Box>
                            < Box>< Text fontSize={15} marginTop={1}>{product?.description}</ Text></Box>
                            <Flex gap='3px' border={"1px solid #eaeaec"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} width={"150px"} marginTop={2}>
                                <Box>{product?.rating}</Box>
                                <Box color={"#14958e"}><AiFillStar /></Box>
                                <Box>|</Box>
                                <Box>{product?.totalReview} Ratings</Box>
                            </Flex>
                            <Box border={"1px solid #e9eaec"} marginTop={2}></Box>
                            <Flex width={"250px"} marginTop={2.5} gap='10px' justifyContent={"flex-start"} alignItems={"center"} height={"40px"}>
                                <Text fontWeight={'semibold'} fontSize={'1.4em'}>₹{product?.price}</Text>
                                <Text textDecoration={"line-through"} fontSize={".9em"} opacity={'.7'}>₹{product?.mrp}</Text>
                                {product?.discount && <Text color={"#ff905a"} fontWeight={'semibold'} >({product?.discount} % OFF)</Text>}
                            </Flex>
                            <Text color={"#39b49a"}>Inclusive of all taxes</Text>
                            <Box marginTop={2} width={"300px"} height={"50px"} display={"flex"} alignItems={"center"}>
                                <Text fontWeight={"700"} fontStyle={"normal"} fontSize={"16px"}>SELECT SIZE</Text>
                                <Text fontWeight={"700"} fontSize={"14px"} marginLeft={"60px"} color={"#ff3e6b"}>SIZE CHART </Text>
                            </Box>
                            <Flex height={"55px"} width={"280px"} alignItems={"center"} justifyContent={'space-between'}>
                                {menSize.map((size, i) => (
                                    <Flex align={'center'} key={i} fontWeight='semibold' cursor='pointer' justify='center' h={"50px"} w={"50px"} border='1px' _hover={{ color: 'red.500', borderColor: 'red.500' }} borderColor={'gray.300'} borderRadius={'50%'}>
                                        {size}
                                    </Flex>
                                ))}
                            </Flex>
                            <Box height={"70px"} mb='3' display={"flex"} width={"auto"} alignItems={"center"} marginTop={"10px"}>
                                <Button onClick={AddToCart} _hover={{ bg: 'red.600' }} px='7' height={"50px"} backgroundColor={"red.500"} color={"white"}><Text marginRight={"10px"}><BsHandbagFill /></Text>ADD TO BAG</Button>
                                <Button onClick={AddToWishlist} height={"50px"} px='3' marginLeft={"10px"} border={"1px solid #e9eaec"} backgroundColor={"white"} color={"black"}><Text marginRight={"10px"}><BsHeart /></Text>ADD TO WISHLIST</Button>
                            </Box>

                            <hr />

                            <Box height={"90px"} marginTop={"12px"}>
                                <Flex width={"250px"} marginTop={'10px'} gap='10px' justifyContent={"flex-start"} alignItems={"center"} >
                                    <Text fontWeight={'semibold'} fontSize={'.9em'}>₹{product?.price}</Text>
                                    <Text textDecoration={"line-through"} fontSize={".9em"} opacity={'.7'}>₹{product?.mrp}</Text>
                                    {
                                        product?.discount && <Text color={"#ff905a"} fontWeight={'semibold'}>({product?.discount} % OFF)</Text>
                                    }
                                </Flex>
                                <Box><Text>Get it by Fri, Jan 20 - 110085</Text></Box>
                                <Box display={"flex"} mb='3'>
                                    <Box><Text>Seller:</Text></Box>
                                    <Box><Text color={"#E53E3E"}> Omnitech Retail</Text></Box>
                                </Box>

                                <hr />

                                <Box height={"50px"} display={"flex"} alignItems={"center"}>
                                    <Text fontWeight={'semibold'}>DELIVERY OPTIONS</Text>
                                    <Text marginLeft={"10px"}><BsTruck /></Text>
                                </Box>
                                <Box><Button justifyContent={"space-between"} width={"225px"} height={"50px"} backgroundColor={"#f4f4f5"}><Text fontWeight={400}>110085</Text><Text color={"#E53E3E"}>Change</Text></Button></Box>

                                <Flex gap='30px' align={'center'} justify='flex-start' height={"50px"} marginTop={"3"} >
                                    <Text fontSize={'2rem'}><TbTruckDelivery /></Text>
                                    <Text fontWeight={'semibold'}>Get it by Fri, Jan 20</Text>
                                </Flex>

                                <Flex gap='30px' align={'center'} justify='flex-start' height={"50px"} marginTop={"3"} >
                                    <Text fontSize={'2rem'} ><FaAmazonPay /></Text>
                                    <Text fontWeight={'semibold'}>Pay on delivery available</Text>
                                </Flex >

                                <Flex gap='30px' align={'center'} justify='flex-start' height={"50px"} marginTop={"3"} >
                                    <Text fontSize={'2rem'}><CgArrowsExchange /></Text>
                                    <Text fontWeight={'semibold'}>Easy 30 days return & exchange available</Text>
                                </Flex >

                                <Box marginTop={"3"} mb='3'><Text fontWeight={100}>100% Original Products</Text></Box>
                                <hr />
                                <Box height={"50px"} display={"flex"} alignItems={"center"}>
                                    <Box><Text fontWeight={'semibold'}>PRODUCT DETAILS </Text></Box>
                                    < Box>< Text marginLeft={"10px"}>< TbListDetails /></ Text></Box>
                                </Box>

                                <Box>
                                    <Text fontWeight={100} width={500}>
                                        This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.
                                    </Text>
                                </Box>
                            </Box >
                        </Box >

                    </Box >
                </Box >
            </Box >

            {/* Footer */}
            <Footer />
        </>
    )
}

export default SingleProductPage