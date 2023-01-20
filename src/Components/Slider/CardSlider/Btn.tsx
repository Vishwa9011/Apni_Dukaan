// import axios from "axios";

export const PrevBtn = (sliderContainer: any, cardRef: any) => {
     if (sliderContainer && cardRef) {
          sliderContainer.current.scrollLeft = sliderContainer.current.scrollLeft - cardRef.current.clientWidth
     }
}
export const NextBtn = (sliderContainer: any, cardRef: any) => {
     if (sliderContainer && cardRef) {
          sliderContainer.current.scrollLeft = sliderContainer.current.scrollLeft + cardRef.current.clientWidth
     }
}