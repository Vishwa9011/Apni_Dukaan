import { Box, Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainSlider from "../../Components/Slider/MainSlider/MainSlider";
import SingleCard from "../../Components/Slider/CardSlider/SingleCard"
import ProductSlider from "../../Components/Slider/CardSlider/ProductSlider";

function Home() {
     return (
          <Box>
               <MainSlider />
               {/* <Flex mt="5" w='100%'>
                    <Image src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" w='100%' />
               </Flex> */}
               {/* <Center mt="2" >
                    <Flex flexDir={"column"} w="80">
                    <Image h="80px" src="data:image/png;base64,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"/>
                    <Text>LOWEST PRICES ON THE BEST BRANDS</Text>
                    <Button>View All</Button>
                    </Flex>
               </Center> */}
               <Flex mt="10" mb="5" justify={'space-around'} w='100%'>
                    <Flex justify={'space-around'} w='100%'>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1671624963.jpg" />
                              <Text>Bestsellers</Text>
                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg" />
                              <Text>Bestsellers</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" />
                              <Text>Bestsellers</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" />
                              <Text>Bestsellers</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" />
                              <Text>Bestsellers</Text>

                         </Box>
                         <Box alignItems={"center"} textAlign="center">
                              <Image src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" />
                              <Text>Bestsellers</Text>

                         </Box>
                    </Flex>

               </Flex>
               <Flex w='100%'>
                    <Image src="https://images-static.nykaa.com/uploads/542701f0-1711-4dab-8238-5ad274a6cd95.gif?tr=w-2400,cm-pad_resize" w='100%' />
               </Flex>
               <Box>
                    <Heading textAlign={"center"} mt="10">SHOP BY CATEGORY</Heading>
                    <Flex p="10">
                         <Box w="80" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/93e7d2a0-743d-4a51-a11c-82def81351f3.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Indianwear</Text>
                         </Box>
                         <Box w="80" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/d1f60b37-4c14-45d5-aaa9-0030367cacc4.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Westernwear</Text>
                         </Box>
                         <Box w="80" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/85fbcd49-e8e8-415b-9257-73432c453cbf.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Menswear</Text>
                         </Box>
                         <Box w="80" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/f22438be-c923-4438-824e-5794b164abc6.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Kidswear</Text>
                         </Box>
                         <Box w="80" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/8951a9aa-a110-43a1-aeaf-c8f17853701b.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Heels & Flates</Text>
                         </Box>
                    </Flex>
                    {/* second */}
                    <Flex ml="30" mr="30" alignItems="center" justifyContent={"center"}>
                         <Box w="60" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/3f3ab163-a0a2-4076-823e-72dcbce05662.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Sneaker</Text>
                         </Box>
                         <Box w="60" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/c25621b3-6932-4290-9f58-9b02d9ce7548.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Denims</Text>
                         </Box>
                         <Box w="60" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/28cfdec3-27bf-438a-a156-0781b67e2299.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Home</Text>
                         </Box>
                         <Box w="60" p="5" textAlign="center">
                              <Image src="https://images-static.nykaa.com/uploads/8a459a25-6e0d-4a91-8377-5da0c08f6a38.jpg?tr=w-480,cm-pad_resize" />
                              <Text>Tech</Text>
                         </Box>
                    </Flex>
               </Box>
               {/* bannerpart */}
               <Box w='100%'>
                    <Flex w='100%' align={'center'} justify='center'>
                         <Image src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-men-1674030025.jpg" />
                         <Image src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1674030025.jpg" />
                    </Flex>
               </Box>
<<<<<<< HEAD
               {/* gif part */}
               <Box pl="20" pr="20" pt="10">
                    <Image src="https://images-static.nykaa.com/uploads/7eba43ac-b3fa-441b-9e33-b2fb2bdd9e84.gif?tr=w-2400,cm-pad_resize"/>
               </Box>

           
=======
>>>>>>> d4b43290bad39d6f86e3679aa0e16006155b64c1

               {/* card */}
               <ProductSlider />

<<<<<<< HEAD

               
               
=======
               {/* gif part */}
               <Flex w='100%'>
                    <Image src="https://images-static.nykaa.com/uploads/7eba43ac-b3fa-441b-9e33-b2fb2bdd9e84.gif?tr=w-2400,cm-pad_resize" />
               </Flex>
>>>>>>> d4b43290bad39d6f86e3679aa0e16006155b64c1
          </Box>
     )
}

export default Home;

