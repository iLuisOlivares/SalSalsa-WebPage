import logo from '../logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from "../components/Layout";
import Carta from "../containers/Carta/Carta";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
/* 
  función que permite crear todas las rutas de la página:
  -. Es necesario de traer un componente que desde los containers.
  -. Si no existe una ruta específica se direcciona al componente NotFound
*/

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carta" component={Carta} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
