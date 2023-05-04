import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../image/logo.png";
import searchImg from "../image/search.png";
import smsImg from "../image/sms.png";

function Header() {
  const [burger, setBurger] = useState(false);
  function handleClick() {
    setBurger(!burger);
  }

  const [info, setInfo] = useState(false);
  function handleClickInfo() {
    return setInfo(!info);
  }

  return (
    <>
      <nav className='flex justify-center'>
        <ul
          className={
            burger
              ? "h-screen py-8 flex flex-col items-center justify-between fixed z-20 bg-gray-900/90 w-full"
              : "fixed flex justify-between items-center sm:absolute z-20 py-8 px-3 bg-gray-900/50 w-full"
          }
        >
          <li className={burger ? "block" : "hidden sm:block"}>
            <ul
              className={
                burger
                  ? "flex items-center space-x-4"
                  : "hidden sm:flex items-center space-x-4"
              }
            >
              <li
                className={burger ? "link-toggle" : "link-main"}
                onClick={() => setBurger(false)}
              >
                <Link to='/movies-app'>Movies</Link>
              </li>
              <li
                className={burger ? "link-toggle" : "link-main"}
                onClick={() => setBurger(false)}
              >
                <Link to='/favorites'>Favorites</Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setBurger(false)} className=''>
            <Link to='/movies-app'>
              <img src={logoImg} alt='img' />
            </Link>
          </li>
          <li
            onClick={() => handleClickInfo()}
            className={info ? "p-2 bg-black/70 rounded" : ""}
          >
            <ul
              className={
                burger
                  ? "flex items-center space-x-4"
                  : "hidden sm:flex items-center space-x-4"
              }
            >
              <li className='cursor-pointer'>
                <img className='max-w-[18px]' src={searchImg} alt='img' />
              </li>
              <li className='cursor-pointer'>
                <img className='max-w-[18px]' src={smsImg} alt='img' />
              </li>
              <li
                className={burger ? "link-toggle" : "cursor-pointer link-main"}
              >
                Sign Up <span className={info ? "" : "hidden"}>&#128512;</span>
              </li>
            </ul>
            <span className={info ? "text-[8px]" : "hidden"}>
              These components are not in working order, work is underway!
            </span>
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

export default Header;
