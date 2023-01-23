import { Box, Button, Center, Flex, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import MainSlider from "../../Components/Slider/MainSlider/MainSlider";
import ProductSlider from "../../Components/Slider/CardSlider/ProductSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import "./Home.css"

function Home() {

     const { loading } = useSelector((store: RootState) => store.auth)

     return (
          <Box>
               {/* loading */}
               {loading && <Loader />}

               {/* Navbar */}
               <Navbar />
               {/* mainslider */}
               <MainSlider />
                    <SimpleGrid columns={[2,3,6]} w='100%' p="5" h="100%" m="auto">

                         <Box  className=".img_Box_text" alignItems={"center"} textAlign="center">
                              <Image className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1671624963.jpg" />
                              <Text  fontWeight={"bold"}>Bestsellers</Text>
                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image  className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg" />
                              <Text fontWeight={"bold"}>New Arrivals</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image  className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" />
                              <Text fontWeight={"bold"}>Hot Deals</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image  className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" />
                              <Text fontWeight={"bold"}>Official Collaborations</Text>
                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image  className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" />
                              <Text fontWeight={"bold"}>Last Sizes Left</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image  className="img_Box" src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" />
                              <Text fontWeight={"bold"}>Plus Size</Text>
                         </Box>
                    </SimpleGrid>

               <Flex w='100%'>
                    <Image src="https://images-static.nykaa.com/uploads/542701f0-1711-4dab-8238-5ad274a6cd95.gif?tr=w-2400,cm-pad_resize" w='100%' />
               </Flex>

               <ProductSlider />

               <Box>
                    <Heading textAlign={"center"} mt="10" color="#E53E3E">SHOP BY CATEGORY</Heading>
                    <SimpleGrid columns={[2,3,5]}>
                    {/* <Grid gridTemplateColumns={'repeat(5,1fr)'} gridTemplateRows='' p="10" className="home_cate"> */}
                         <Flex align={'center'} justify='center' flexDir={'column'} w="80%" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/93e7d2a0-743d-4a51-a11c-82def81351f3.jpg?tr=w-480,cm-pad_resize" w='100%' />
                              <Text>Indianwear</Text>
                         </Flex>
                         <Flex align={'center'} justify='center' flexDir={'column'} w="80%" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/d1f60b37-4c14-45d5-aaa9-0030367cacc4.jpg?tr=w-480,cm-pad_resize" w='100%' />
                              <Text>Westernwear</Text>
                         </Flex>
                         <Flex align={'center'} justify='center' flexDir={'column'} w="80%" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/85fbcd49-e8e8-415b-9257-73432c453cbf.jpg?tr=w-480,cm-pad_resize" w='100%' />
                              <Text>Menswear</Text>
                         </Flex>
                         <Flex align={'center'} justify='center' flexDir={'column'} w="80%" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/f22438be-c923-4438-824e-5794b164abc6.jpg?tr=w-480,cm-pad_resize" w='100%' />
                              <Text>Kidswear</Text>
                         </Flex>
                         <Flex align={'center'} justify='center' flexDir={'column'} w="80%" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/8951a9aa-a110-43a1-aeaf-c8f17853701b.jpg?tr=w-480,cm-pad_resize" w='100%' />
                              <Text>Heels & Flates</Text>
                         </Flex>
                         </SimpleGrid>

                         {/* https://images-static.nykaa.com/uploads/4a455f56-9cd6-4a70-8e44-221021721dc2.jpg?tr=w-300,cm-pad_resize */}
                  
                    <SimpleGrid  columns={[2,2,4]} m="auto" w="70%" alignItems={"center"}>
                         <Flex flexDir={'column'} align='center'  p="5" >
                              <Image src="https://images-static.nykaa.com/uploads/3f3ab163-a0a2-4076-823e-72dcbce05662.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Sneaker</Text>
                         </Flex>
                         <Flex flexDir={'column'} align='center'  p="5" >
                              <Image src="https://images-static.nykaa.com/uploads/c25621b3-6932-4290-9f58-9b02d9ce7548.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Denims</Text>
                         </Flex>

                         <Flex flexDir={'column'} align='center'  p="5" >
                              <Image src="https://images-static.nykaa.com/uploads/28cfdec3-27bf-438a-a156-0781b67e2299.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Home</Text>
                         </Flex>
                         <Flex flexDir={'column'} align='center'p="5" >
                              <Image src="https://images-static.nykaa.com/uploads/8a459a25-6e0d-4a91-8377-5da0c08f6a38.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Tech</Text>
                         </Flex>
               
                    </SimpleGrid>
               </Box>
               {/* bannerpart */}
               <Box w='100%'>
                    <Flex w='100%' align={'center'} justify='center'>
                         <Image src='/Images/landing_page_image.png' />
                    </Flex>
               </Box>

               {/* gif part */}
               {/* <Box pl="20" pr="20" pt="10">
                    <Image src="https://images-static.nykaa.com/uploads/7eba43ac-b3fa-441b-9e33-b2fb2bdd9e84.gif?tr=w-2400,cm-pad_resize" />
               </Box> */}

               {/* card */}
               {/* <ProductSlider /> */}
               <Flex w='100%' p="10">
                    <Image src="https://images-static.nykaa.com/uploads/a985e091-4201-480b-975b-c10742803178.jpg?tr=w-2400,cm-pad_resize" />
               </Flex>

               {/* gif part */}
               <Flex w='100%'>
                    <Image src="https://images-static.nykaa.com/uploads/7eba43ac-b3fa-441b-9e33-b2fb2bdd9e84.gif?tr=w-2400,cm-pad_resize" />
               </Flex>

               {/* Footer */}
               <Footer />

          </Box>
     )
}

export default Home;

