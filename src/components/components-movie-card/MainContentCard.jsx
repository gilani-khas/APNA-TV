import { useSelector } from "react-redux";
import star from "../../image/star-card.png";

function MainContentCard() {
  const cardContent = useSelector((state) => state.cardDate);

  return (
    <div className='pt-[120px]'>
      <section className='relative flex items-center justify-center'>
        <img
          data-aos='fade-right'
          className='w-full max-h-[480px] rounded-[35px] object-cover'
          src={cardContent.banner}
          alt='img'
        />
        <div
          data-aos='fade-left'
          className='bg-[#20283ECC]/80 md:inline-block p-5 md:p-10 mx-2 rounded-3xl md:w-[40%] absolute md:left-[6%] bottom-[-13%]'
        >
          <span className='text-[12px] text-[#BEB7FB]'>
            MaileHereko / Movies
          </span>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold'>
            {cardContent.title}
          </h2>
        </div>
      </section>
      <section className='pt-[150px] md:flex justify-between max-w-[1040px] mx-auto md:space-x-6'>
        <div data-aos='fade-up' className='md:w-1/2'>
          <img
            className='rounded-3xl w-full'
            src={cardContent.mainImage}
            alt='img'
          />
        </div>
        <div
          data-aos='fade-down'
          className='md:w-1/2 flex flex-col justify-between mt-10 md:mt-0'
        >
          <div>
            <h3 className='text-2xl font-bold mb-5'>Discription</h3>
            <p className='h-[225px] overflow-y-auto text-xl text-[#8E95A9]'>
              {cardContent.discription}
            </p>
            <div className='inline-block bg-black/60 rounded-lg px-1'>
              <div className='flex items-center'>
                <img className='mr-1' src={star} alt='img' />
                <span className='text-[#FFAD49] text-[16px]'>
                  {cardContent.rating}
                </span>
              </div>
            </div>
          </div>
          <ul className='text-xl'>
            <li className='flex items-center justify-between md:block'>
              <span className='text-[16px] text-[#767E94]'>Type</span>
              <h4 className='mb-1 lg:mb-6 mt-2'>{cardContent.type}</h4>
            </li>
            <li className='flex items-center justify-between md:block'>
              <span className='text-[16px] text-[#767E94]'>Release Date:</span>
              <h4 className='mb-1 lg:mb-6 mt-2'>{cardContent.year}</h4>
            </li>
            <li className='flex items-center justify-between md:block'>
              <span className='text-[16px] text-[#767E94]'>Run time</span>
              <h4 className='mb-1 lg:mb-6 mt-2'>{cardContent.runtime}</h4>
            </li>
            <li className='flex items-center justify-between md:block'>
              <span className='text-[16px] text-[#767E94]'>Genres</span>
              <h4 className='mb-1 lg:mb-6 mt-2'>
                {cardContent.genres.join(", ")}
              </h4>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MainContentCard;
