import { Routes, Route } from 'react-router-dom';
import Home from "./home/HomeSite.tsx";
import Dish from "./dish/DishOverview.tsx";
import { useState } from 'react';

function App() {
  const [sidebarState, setSidebarState] = useState(false);
  return (
      <Routes>
        <Route path="/" element={<Home 
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
        />} />
        <Route path="/dish" element={<Dish />} />
      </Routes>
  )
}

export default App;


