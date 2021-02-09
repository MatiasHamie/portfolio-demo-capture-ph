import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * La idea de este componente es que cada vez que se
 * haga click en un link del nav, se vaya automaticamente
 * la vista al top.
 *
 * Usamos el useLocation() el router para eso, y se desestructura el
 * pathname para saber en que pagina estas, y cada vez que cambie,
 * lo ejecuto por el useEffect.
 *
 * Esto va en el componente APP ya que contiene a todos
 */

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
