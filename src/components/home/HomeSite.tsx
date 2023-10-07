import { HomeHeader, Delivery, PictureOptions, Countries } from "./layout/hLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { useEffect, useState } from "react";


function Home() {
  const [scrolling, setScrolling] = useState<boolean>(false)

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        let scrollTimeout
        setScrolling(true);
        clearTimeout(scrollTimeout);
        
        // Set a timeout to reset scrolling to false after a brief delay
        scrollTimeout = setTimeout(() => {
          setScrolling(false);
          isScrolling = false;
        }, 20); // Adjust the delay as needed
        isScrolling = true;
      }
    }

    window.addEventListener('scroll', handleScroll);
    // console.log(scrolling);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // console.log(scrolling);
    }
  }, [])


  return (
    <div className="main-site">
      <div className="overlay"></div>
      <HomeHeader 
        scrollingState={scrolling}
      />
      <Sidebar />
      <Delivery />
      <PictureOptions />
      <Countries />
      <Footer />
    </div>
  )
}


export default Home;
