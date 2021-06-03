import logo from './logo.svg';
import './App.css';
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import Accueil  from "./accueil";
import Component  from "./component";
import Footer  from "./layout/footer/index";
import Header  from "./layout/header/index";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/composant" component={Component} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
