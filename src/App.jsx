import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favorites from "./views/Favorites";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
