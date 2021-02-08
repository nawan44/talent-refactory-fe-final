import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/header";
import "./style/App.css";
import Home from "./component/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
