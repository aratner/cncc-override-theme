// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PictureResponsive from "../components/PictureResponsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperSlider() {
  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      mousewheel={{ forceToAxis: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sampleArray.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <PictureResponsive
              childClass="w-full h-auto"
              imageType="fixed"
              domain="media.allure.com"
              copilotid="607379aab0238890b35989ed"
              width={960}
              height={1435}
              fileName={"clouds"}
              alttext={"This is some alt text"}
              loading={"lazy"}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
