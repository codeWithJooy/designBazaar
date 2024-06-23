import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Designer from "./pages/category/Designer";
import Developer from "./pages/category/Developer";
import Artist from "./pages/category/Artist";
import Ecommerce from "./pages/category/Ecommerce";
import Photographer from "./pages/category/Photographer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/designer" component={Designer} />
        <Route path="/developer" component={Developer} />
        <Route path="/artist" component={Artist} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/photographer" component={Photographer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
