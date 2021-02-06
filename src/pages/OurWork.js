import React from "react";

import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";

import {
  fadeAnimation,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  sliderAnimation,
  sliderContainerAnimation,
} from "../animation";
import { motion } from "framer-motion";
import { UseScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  const [element3, controls3] = UseScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
      layout="position"
    >
      <motion.div variants={sliderContainerAnimation}>
        {/* Divs para la animacion */}
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>
      <StyledMovie
        ref={element}
        variants={fadeAnimation}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fadeAnimation}>El Atleta</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={fadeAnimation}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fadeAnimation}>El Piloto</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <StyledHide>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt="theracer"
            />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element3}
        variants={fadeAnimation}
        animate={controls3}
        initial="hidden"
      >
        <motion.h2 variants={fadeAnimation}>Buenos Tiempos</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <StyledHide>
            {/* Si no queres que se aplique el stagger, tenes q poner el initial y animate a mano */}
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="goodtimes"
            />
          </StyledHide>
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

/**
 * Si queremos animar un styled component, tenemos que hacer
 * const unComponenteStyled = styled(motion.div (div/button/lo que sea))
 * y despues en el JSX ya podemos sguir con variants, initial y animate
 */
const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px){
    padding: 2rem 2rem
  }
`;
const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
