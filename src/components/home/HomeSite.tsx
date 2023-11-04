import { HomeHeader, DeliveryAddressSection, PictureOptionsSection, CountriesSection } from "./layout/hLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { useEffect, useState } from "react";
import { HomeProps } from "../../types/home/HomeSiteTypes";


const HomeSite = ({ sidebarState, setSidebarState }: HomeProps) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  
  function changeState() {
    if(sidebarState) {
      setSidebarState(false);
    }
  }

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        let scrollTimeout
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
          isScrolling = false;
        }, 20); 
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
        scrollingState={isScrolling}
      />
      <Sidebar 
        sidebarState={sidebarState}
      />
      <DeliveryAddressSection />
      <PictureOptionsSection />
      <CountriesSection />
      <Footer />
    </div>
  )
}


export default HomeSite;
