import { useSelector } from "react-redux";
import Slider from "./Slider";
import starImg from "../../image/star.png";
import playImg from "../../image/play.png";

function MainSection() {
  const banner = useSelector((state) => state.banner);

  return (
    <div className='max-h-[900px] relative z-10 pb-[310px]'>
      <img
        className='block w-full h-full object-cover absolute'
        src={banner.back}
        alt='img'
      />
      <div className='relative pt-[120px] px-3 max-w-[1300px] mx-auto'>
        <h1 data-aos='fade-down' className='text-white text-5xl font-bold'>
          {banner.title}
        </h1>
        <p className='max-w-[500px] h-[150px] overflow-auto mt-4'>
          {banner.discription}
        </p>
        <div className='flex items-center'>
          <img className='max-w-[27px] mr-3' src={starImg} alt='img' />{" "}
          {banner.rating}
        </div>
        <div className='mt-9 flex space-x-4'>
          <a
            data-aos='fade-up'
            className='inline-block transition duration-200 rounded-full py-4 px-7 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 font-semibold'
            href={banner.url}
          >
            <div className='flex items-center'>
              <img className='max-w-[28px] mr-3' src={playImg} alt='img' />{" "}
              Watch Now
            </div>
          </a>
          <a
            data-aos='fade-left'
            data-aos-anchor='#example-anchor'
            data-aos-offset='500'
            data-aos-duration='500'
            className='inline-block transition duration-200 rounded-full py-4 px-7 bg-translate hover:bg-white/30 active:bg-white/50 border font-semibold'
            href={banner.url}
          >
            <div className='flex items-center'>Trailer</div>
          </a>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default MainSection;
