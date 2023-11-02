import { Routes, Route } from "react-router-dom";
import HomeSite from "./home/HomeSite.tsx";
import DishSite from "./dish/DishOverview.tsx";
import AuthSite from "./sign-in-up/signInUp.tsx";
import { useState } from "react";

const App = () => {
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeSite sidebarState={sidebarState} setSidebarState={setSidebarState} />
        }
      />
      <Route
        path="/dishsite"
        element={
          <DishSite sidebarState={sidebarState} setSidebarState={setSidebarState} />
        }
      />
      <Route path="/authsite" element={<AuthSite />} />
    </Routes>
  );
}

export default App;
