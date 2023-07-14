// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperCard.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiperCard = () =>  {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });

      return( 
      <div>
      <div class="card swiper-slide">
      <div class="image-content">
          <span class="overlay"></span>

         
      </div>

      <div class="card-content">
          <h2 class="name">Mohamed Yousef
</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
      </div>
  </div>
  <div class="card swiper-slide">
      <div class="image-content">
          <span class="overlay"></span>

         
      </div>

      <div class="card-content">
          <h2 class="name">Mohamed Yousef
</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
      </div>
  </div>
</div>



);
};

export default MySwiperCard

{/* <div class="swiper-button-next swiper-navBtn"></div>
<div class="swiper-button-prev swiper-navBtn"></div>
<div class="swiper-pagination"></div>
</div> */}

//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//     //   scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       <SwiperSlide>Slide 6</SwiperSlide>
//     </Swiper>
//   );