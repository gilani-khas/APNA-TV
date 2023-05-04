import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
  FreeMode,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { movies } from "../../actions";
import vectorImg from "../../image/Vector.png";

function Slider() {
  const moviesImg = useSelector((state) => state.movie);
  const banner = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    dispatch(movies());
  }, []);
  const moviess = moviesImg.data.movies;

  function handleClick(id) {
    moviess.map((i) => {
      if (i.id === id) {
        dispatch({
          type: "banner",
          payload: {
            back: i.background_image_original,
            title: i.title,
            subTitle: "",
            discription: i.summary,
            rating: String(i.rating),
            url: i.url,
            clicked: true,
          },
        });
      } else {
        return null;
      }
    });
  }
  return (
    <div className='absolute z-10 bottom-[-15%] w-full  flex flex-col items-center justify-center '>
      <h2 className='w-[95vw] font-semibold text-xl mb-9'>Popular Movies</h2>
      <div className='flex items-center'>
        <div className='bg-gray-400/30 border border-white/20 p-4 rounded-xl'>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectCoverflow,
              FreeMode,
            ]}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            spaceBetween={0}
            slidesPerView={1}
            speed={2000}
            freeMode={true}
            autoplay={{
              delay: 1000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {moviess.map((i, idx) => {
              return (
                <SwiperSlide
                  className={
                    activeIndex === idx ? "relative sm:right-4 z-20" : ""
                  }
                  onClick={() => handleClick(i.id)}
                  key={idx}
                >
                  <img
                    onClick={() => handleCardClick(idx)}
                    className={`transition duration-1000 max-w-[165px] rounded-2xl cursor-pointer ${
                      activeIndex === idx
                        ? "border border-red-700 max-w-[200px] relative z-20"
                        : ""
                    }`}
                    src={i.medium_cover_image}
                    alt=''
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button className='hidden m-4 cursor-pointer lg:inline-block review-swiper-button-prev origin-center rotate-180'>
          <img src={vectorImg} alt='img' />
        </button>
        <button className='hidden m-4 cursor-pointer lg:inline-block icon-arrow-long-right review-swiper-button-next'>
          <img src={vectorImg} alt='img' />
        </button>
      </div>
    </div>
  );
}

export default Slider;
