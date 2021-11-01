import logo from '../logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from "../components/Layout";
import Carta from "../containers/Carta/Carta";
import Nosotros from "../containers/Nosotros/Nosotros";
import Servicios from "../containers/Servicios/Servicios";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
import Reserva from '../containers/Reserva/reserva';
import Carrito from '../containers/Carrito/Carrito';
import Mapa from '../containers/Mapa/Mapa';
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
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/carta" component={Carta} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/reserva" component={Reserva} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/mapa" component={Mapa} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
