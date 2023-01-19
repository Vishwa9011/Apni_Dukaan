// import axios from "axios";

export const PrevBtn = (sliderContainer:any)=> {
     if (sliderContainer !== null) {
          const width = sliderContainer.current.clientWidth;
          sliderContainer.current.scrollLeft = sliderContainer.current.scrollLeft - width
          console.log('width: ', width);
     }
}
export const NextBtn = (sliderContainer:any) => {
     if (sliderContainer !== null) {
          const width = sliderContainer.current.clientWidth;
          sliderContainer.current.scrollLeft = sliderContainer.current.scrollLeft + width
          console.log('width: ', width);
     }
}