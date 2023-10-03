import { DishHeader, Categories, Slideshow } from "./layout/dLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";


function Dish() {
  return (
    <>
      <DishHeader />
      <Sidebar />
      <Categories />
      <Slideshow />
      <Footer />
    </>
  )
}


export default Dish;