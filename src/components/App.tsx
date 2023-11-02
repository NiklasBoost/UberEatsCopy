import { Routes, Route } from "react-router-dom";
import Home from "./home/HomeSite.tsx";
import DishSite from "./dish/DishOverview.tsx";
import Auth from "./sign-in-up/signInUp.tsx";
import { useState } from "react";

function App() {
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home sidebarState={sidebarState} setSidebarState={setSidebarState} />
        }
      />
      <Route
        path="/dishsite"
        element={
          <DishSite sidebarState={sidebarState} setSidebarState={setSidebarState} />
        }
      />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
