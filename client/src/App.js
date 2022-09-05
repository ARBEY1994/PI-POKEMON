import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonCreate from "./components/PokemonCreate";

import Home from "./components/Home";
import Detail from "./components/Detail";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:id" element={<Detail />}></Route>
          <Route path="/pokemon" element={<PokemonCreate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
