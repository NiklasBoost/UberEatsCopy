import { HomeHeader, Delivery, PictureOptions, Countries } from "./layout/hLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";


function Home() {
  return (
    <>
      <HomeHeader />
      <Sidebar />
      <Delivery />
      <PictureOptions />
      <Countries />
      <Footer />
    </>
  )
}

export default Home;