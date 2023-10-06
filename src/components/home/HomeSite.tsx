import { HomeHeader, Delivery, PictureOptions, Countries } from "./layout/hLayout";
import { Footer, Sidebar } from "../common/layout/cLayout";


function Home() {
  return (
    <div className="main-site">
      <div className="overlay"></div>
      <HomeHeader />
      <Sidebar />
      <Delivery />
      <PictureOptions />
      <Countries />
      <Footer />
    </div>
  )
}

export default Home;