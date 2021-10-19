import React from "react";
import Header from "./Header";
import Footer from "./Footer";

/* 
  Componente que permite conectar el header y footer en todas las páginas
  Se usa en route/App 
  {children} hace referencia al contenido que tiene dentro

*/

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;