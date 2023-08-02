// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperSlider() {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sampleArray.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="h-96 flex justify-center items-center border-4">
              Slide {item}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
