import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../image/logoCard.png";
import searchImg from "../../image/search.png";
import smsImg from "../../image/sms.png";

function HeaderMovieCard() {
  const [burger, setBurger] = useState(false);
  function handleClick() {
    setBurger(!burger);
  }

  return (
    <>
      <nav className='flex justify-center'>
        <ul
          className={
            burger
              ? "h-screen py-8 flex flex-col items-center fixed z-20 bg-gray-900/90 w-full"
              : "fixed flex justify-between items-center sm:absolute z-20 py-8 px-3 bg-gray-900/50 w-full"
          }
        >
          <li onClick={() => setBurger(false)} className=''>
            <Link to='/movies-app'>
              <img src={logoImg} alt='img' />
            </Link>
          </li>
          <li className={burger ? "block" : "hidden sm:block"}>
            <ul
              className={
                burger
                  ? "flex flex-col mt-[30vh] items-center space-y-7"
                  : "hidden sm:flex items-center space-x-14"
              }
            >
              <li
                className={burger ? "link-toggle-active" : "link-toggle"}
                onClick={() => setBurger(false)}
              >
                <Link to='/movies-app'>Movies</Link>
              </li>
              <li
                className={burger ? "link-toggle-active" : "link-toggle"}
                onClick={() => setBurger(false)}
              >
                <Link to='/movies-app'>TV Shows</Link>
              </li>
              <li
                className={burger ? "link-toggle-active" : "link-toggle"}
                onClick={() => setBurger(false)}
              >
                <Link to='/movies-app'>Suggest me →</Link>
              </li>
            </ul>
          </li>
          <li
            className={
              burger
                ? "cursor-pointer absolute top-2 right-2"
                : "cursor-pointer sm:hidden"
            }
            onClick={() => handleClick()}
          >
            <span className='font-black uppercase'>menu</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
// →

export default HeaderMovieCard;
