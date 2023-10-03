import { Routes, Route } from 'react-router-dom';
import Home from "./home/HomeSite.tsx";
import Dish from "./dish/DishOverview.tsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish" element={<Dish />} />
      </Routes>
  )
}

export default App;


