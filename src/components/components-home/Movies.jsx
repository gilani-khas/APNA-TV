import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moviesMain } from "../../actions";
import star from "../../image/star-card.png";
import MovieCard from "../../pages/MovieCard";

function Movies() {
  const cardDate = useSelector((state) => state.cardDate);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesMain());
  }, []);

  function handleClick(id) {
    const movie = movies.data.movies.find((movie) => movie.id === id);
    dispatch({
      type: "favorites/movies",
      payload: {
        id: movie.id,
        title: movie.title,
        img: movie.medium_cover_image,
        url: movie.url,
      },
    });
    alert("This film has been added to favorites!)");
  }

  function dataTransfer(id) {
    const movie = movies.data.movies.find((movie) => movie.id === id);
    dispatch({
      type: "card/movie",
      payload: {
        title: movie.title,
        discription: movie.summary,
        rating: movie.rating,
        type: "Movie",
        year: movie.year,
        runtime: movie.runtime,
        genres: movie.genres,
        banner: movie.background_image,
        mainImage: movie.large_cover_image,
        comments: [],
      },
    });
  }

  const moviess = movies.data.movies;
  return (
    <section className='max-w-[1224px] mx-auto px-3 pb-20 mt-[190px]'>
      <h1 data-aos='fade-right' className='text-6xl font-semibold'>
        Movies
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mt-20'>
        {moviess.map((movie) => {
          return (
            <div
              data-aos='fade-up'
              key={movie.id}
              className='w-[282px] sm:w-auto p-2 pb-6 bg-[#20283ECC]/80 rounded-xl relative'
            >
              <div
                onClick={() => dataTransfer(movie.id)}
                className='relative cursor-pointer'
              >
                <Link to={`/moviecard`}>
                  <img
                    className='w-full rounded-xl'
                    src={movie.medium_cover_image}
                    alt=''
                  />
                  <div className='absolute top-[8px] left-[8px] inline-block bg-black/60 rounded-lg px-1'>
                    <div className='flex items-center'>
                      <img className='mr-1' src={star} alt='img' />
                      <span className='text-[#FFAD49] text-[16px]'>
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <h3 className='text-[16px] font-semibold mt-6 pb-6 flex-auto'>
                {movie.title}
              </h3>
              <div
                onClick={() => handleClick(movie.id)}
                className='absolute bottom-4 cursor-pointer'
              >
                <span className='transition duration-200 text-[16px] font-semibold text-[#7B6EF6] hover:text-[#b8b2f0] active:text-white'>
                  <span className='text-xl'>+</span> Add to my list
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Movies;
