import { motion } from "framer-motion";
import React from "react";
import { fadeAnimation, photoAnimation, titleAnimation } from "../animation";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImg,
} from "../styles";
import Wave from "./Wave";

/**
 * Framer Motion:
 * Para que funcione, por ejemplo al querer animar un h2, tenemos q reemplazar la etiqueta por
 * motion.h2
 *
 * vamos a usar 2 props, animate e initial, por ej
 * <motion.h2
 *    animate={
 *              {
 *                opacity: 1,
 *                transition: {duration: 2}
 *              }
 *            }>
 *    initial= {
 *                opacity: 0
 *             }
 *  Texto dentro del h2
 * </motion.h2>
 */
/**
 * Si tenemos varios hijos que queremos animar, directamente en el padre, en la
 * prop transition, ponemos staggerChildren: segundos, y hace que todos los hijos se animen, y
 * si quiero que la animacion del padre se haga antes, o despues de que los hijos se animen
 * pongo when: afterChildren o beforeChildren
 */
// const container = {
//   hidden: { x: 100 },
//   show: {
//     x: 0,
//     transition: {
//       duration: 0.75,
//       ease: "easeOut",
//       staggerChildren: 0.3,
//       when: "beforeChildren",
//     },
//   },
// };

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          {/* se hace un div por renglon
                para poder animarlo despues */}
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Haremos que</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              sus <span>sueños</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              se vuelvan realidad.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contáctanos para las ideas de fotografía o videos que tengas. Nosotros
          tenemos profesionales con increibles habilidades.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contáctanos</motion.button>
      </StyledDescription>
      <StyledImg>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </StyledImg>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
