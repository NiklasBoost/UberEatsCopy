import { DishHeader, Categories, Slideshow, MealChoose } from "./layout/dLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";
import { DishOverviewProps } from "../../types/dish/DishOverviewTypes";
import { useState, useEffect } from "react";


function Dish({ sidebarState, setSidebarState }: DishOverviewProps) {
  const [overlayStyle, setOverlayStyle] = useState({});
  function changeState() {
    if(sidebarState) {
      setSidebarState(false);
    }
  }

  useEffect(() => {
    if(sidebarState) {
      setOverlayStyle({display: 'block'})
    } else {
      setOverlayStyle({display: 'none'})
    }
  }, [sidebarState])
  
  return (
    <div onClick={changeState}>
      <div style={overlayStyle} className="overlay"></div>
        <DishHeader 
          setSidebarState={setSidebarState}
        />
        <Sidebar 
          sidebarState={sidebarState}
        />
        <Categories />
        <Slideshow />
        <MealChoose />
        <Footer />
    </div>
  )
}


export default Dish;