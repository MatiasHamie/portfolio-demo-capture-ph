import Nav from "./components/Nav";
// Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import MovieDetail from "./pages/MovieDetail";

//Framer Motion
import { Route, Switch, useLocation } from "react-router-dom";
/*
Esto le permite saber a framer-motion cuando se cierra un componente 
Lo que se tiene que hacer (segun la doc) es saber el "Key" de la pagina
donde estamos en este momento para poder hacerle seguimiento, por eso usa el
useLocation() que es similar al useHistory() del router
*/
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Se pueden solapar las animaciones de exit y de entrada de la pagina que clickeamos en el nav
      por ende lo que se tiene q hacer es poner la prop exitBeforeEnter para que funcione */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>

        <ScrollTop />
      </AnimatePresence>
    </div>
  );
}
export default App;
