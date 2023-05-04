import { useSelector } from "react-redux";
import Comments from "../components/components-movie-card/Comments";
import HeaderMovieCard from "../components/components-movie-card/HeaderMovieCard";
import MainContentCard from "../components/components-movie-card/MainContentCard";

function MovieCard() {
  const loader = useSelector((state) => state.loader);

  return loader ? (
    <div className='fixed h-screen w-full flex flex-col justify-center items-center'>
      <span className='loader'></span>
      <h2 className='text-sm font-semibold mt-2 uppercase'>please wait</h2>
    </div>
  ) : (
    <div className='min-h-screen pb-20 px-2 bg-[#121829]'>
      <div className='max-w-[1216px] mx-auto relative flex flex-col items-center'>
        <HeaderMovieCard />
        <MainContentCard />
        <Comments />
      </div>
    </div>
  );
}

export default MovieCard;
