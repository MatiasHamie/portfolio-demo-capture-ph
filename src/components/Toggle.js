import { motion } from "framer-motion";
import React, { useState } from "react";
/**
 * Cuando se pone un / unos elementos dentro de un 
 * <NombreComponente></NombreComponente>, como en este caso
 * <Toggle>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              cupiditate?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
    </Toggle>
 *  Se recibe implicitamente una prop llamada children, y para no hacer un lio
    de logica para un simple toggle de un booleano por cada uno, se hace algo reutilizable

    Lo que se hace aca es, se devuelve un div nuevo, que envuelve a todo lo anterior, y 
    a ese div, si se le hace un click, se hace el toggle, y se muestra el hijo o no

    El problema radica en que necesitas tener una propiedad antes del {toggle bla bla}
    porque si no, al hacerle click, desaparece del html y no lo podemos manipular mas

    como todas las preguntas tienen un titulo, se lo paso como prop
 */

 /**
  * Para que funcione la animacion de AnimateSharedLayout del padre de este componente,
  * tenemos q hacer todo motion.div y poner al componente que envuelve todo
  * (en este caso es el div q haces click) tenes que ponerle la prop layout para q lo detecte asi como
  * le pones al h4, porque si no va a deformar el texto cuando se anime, puede ser un bug, pero bueno, le
  * agrego layout y funciona
  */

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout
      onClick={() => {
        setToggle(!toggle);
        // console.log(children);
      }}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
