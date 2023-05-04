import { useSelector } from "react-redux";
import Header from "../components/Header";
import MainSection from "../components/components-home/MainSection";
import Movies from "../components/components-home/Movies";

function Home() {
  const loader = useSelector((state) => state.loader);

  return loader ? (
    <div className='fixed h-screen w-full flex flex-col justify-center items-center'>
      <span className='loader'></span>
      <h2 className='text-sm font-semibold mt-2 uppercase'>please wait</h2>
    </div>
  ) : (
    <>
      <Header />
      <MainSection />
      <Movies />
    </>
  );
}

export default Home;
