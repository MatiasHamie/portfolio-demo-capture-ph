import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const UseScroll = () => {
  /**
   * Scroll animation: la idea es con el useInView(), puedas
   * usar element y view.
   *
   * Element: es un booleano, se lo pones como ref={element} a lo
   * que te interese que cuando se hace scroll y aparezca en el viewport,
   * hace que se ponga en true la variable view.
   *
   * al useInView le podemos agregar el treshhold, que 1 es el que recien
   * cuando se vea el 100% del element se ponga view en true, por ende
   * 0.5 es la mitad
   *
   */

  const [element, view] = useInView({ threshold: 0.3 });

  /**
   * useAnimation() sirve para que con un boolean puedas manejarlo,
   * ya sea cuando queres hacer un click, o se scrollee hasta ahi,
   * entonces ahora con un if, usamos lo que ya se estuvo viendo,
   * show y hidden
   */
  const controls = useAnimation();
  view ? controls.start("show") : controls.start("hidden");

  return [element, controls];
};
