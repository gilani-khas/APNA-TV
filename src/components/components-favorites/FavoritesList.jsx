import { useDispatch, useSelector } from "react-redux";
import playImg from "../../image/play.png";
import { Link } from "react-router-dom";

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function removeToggle(id) {
    const filterFavorites = favorites.filter((i) => {
      return i.id !== id;
    });
    dispatch({ type: "favorites/delete", payload: filterFavorites });
  }

  return (
    <div className='flex flex-col items-center mt-24 pb-20 px-2'>
      <h1 data-aos='fade-right' className='text-3xl font-bold my-10'>
        Favorites Movies
      </h1>
      {favorites.length === 0 ? (
        <span className='text-center block p-4 bg-gray-400/10 border border-white/20 rounded'>
          Add movies, for future viewing.
        </span>
      ) : (
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-4 bg-gray-400/10 border border-white/20 w-full rounded'>
          {favorites.map((i, idx) => {
            return (
              <div className='p-4 bg-[#20283ECC]/80 rounded' key={idx}>
                <Link to={`/moviecard`}>
                  <img className='w-full rounded' src={i.img} alt='img' />
                </Link>
                <div>
                  <span className='block pt-4 font-semibold text-sm'>
                    {i.title}
                  </span>
                  <button></button>
                </div>
                <div className='flex'>
                  <a
                    href={i.url}
                    className=' cursor-pointer flex items-center text-sm w-1/2 transition duration-200 rounded-l-full py-2 px-2 border border-pink-500 border-5 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 font-semibold'
                  >
                    <img className='mr-2' src={playImg} alt='img' />{" "}
                    <span> Watch Now</span>
                  </a>
                  <button
                    onClick={() => removeToggle(i.id)}
                    className='w-1/2 rounded-r-full py-2 px-2 transition duration-200 bg-transparent hover:bg-white/30 active:bg-white/50 border border-pink-500 hover:border-white border-l-0 text-center font-semibold'
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FavoritesList;
