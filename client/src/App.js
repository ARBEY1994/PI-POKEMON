import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonCreate from "./components/PokemonCreate";
import landingPage from "./components/landingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/pokemon" component={PokemonCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
