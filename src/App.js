import { Routes, Route, Link, Router } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MovieCard from "./pages/MovieCard";

function App() {
  return (
    <>
      <div className='text-white bg-black text-lg'>
        <div className=''>
          <Routes>
            <Route path='/movies-app' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/moviecard' element={<MovieCard />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
