


import { useEffect, useState } from 'react'
import { Box,Heading,Image} from '@chakra-ui/react';
import "./MainSlider.css"

function MainSlider() {
    const [image, setImage] = useState(0)
     let id:any;
     useEffect(() => {
        id= setInterval(() => {
               if (image === 4) {
                    setImage(0)
               } else {
                    setImage(prev => prev + 1)
               }
          }, 3000);
          return () => clearInterval(id)
     }, [image])

     const slidesImages = [
          { url: 'https://images-static.nykaa.com/uploads/a312663b-caaa-464a-b5f1-e3522a636e26.jpg' },
          // { url: 'https://images-static.nykaa.com/uploads/56bbfd58-27ca-4b8e-b73b-6ea4fe88236e.jpg?tr=w-2400,cm-pad_resize' },
          { url: 'https://images-static.nykaa.com/uploads/56bbfd58-27ca-4b8e-b73b-6ea4fe88236e.jpg' },

          // { url: 'https://images-static.nykaa.com/uploads/e2a1ab98-8ada-4a82-ad2d-66950ccdabcb.jpg' },
          { url: 'https://images-static.nykaa.com/uploads/a46e1b6b-2bf7-47c8-bf6a-84e51160f30f.jpg' },
          { url: 'https://images-static.nykaa.com/uploads/f965081b-ab0b-49f0-91d9-426bb4aa03b2.jpg' },
          { url: 'https://images-static.nykaa.com/uploads/917a11fc-d6f0-4000-9445-45f1d796b192.jpg' },

     ]

  

     return (
          <Box w="100%" pos='relative' className='mainSlider'  >
               <Box  >
                    <Image className='mainSliderimg'  w="100%" src={slidesImages[image]?.url} />
               </Box>
          
            
          </Box>
     )
}

export default MainSlider;