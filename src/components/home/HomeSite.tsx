import { HomeHeader, Delivery, PictureOptions, Countries } from "./layout/hLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { useEffect, useState } from "react";
import { HomeProps } from "../../types/home/HomeSiteTypes";


function Home({ sidebarState, setSidebarState }: HomeProps) {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  
  function changeState() {
    if(sidebarState) {
      setSidebarState(false);
    }
  }

//scroller
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

//overlaystyle
  useEffect(() => {
    if(sidebarState) {
      setOverlayStyle({display: 'block'})
    } else {
      setOverlayStyle({display: 'none'})
    }
  }, [sidebarState])


  return (
    <div onClick={changeState} className="main-site">
      <div style={overlayStyle} className="overlay"></div>
      <HomeHeader 
        setSidebarState={setSidebarState}
        scrollingState={scrolling}
      />
      <Sidebar 
        sidebarState={sidebarState}
      />
      <Delivery />
      <PictureOptions />
      <Countries />
      <Footer />
    </div>
  )
}


export default Home;
