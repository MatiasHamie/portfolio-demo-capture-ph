import React from "react";

//SVGs
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

import home2 from "../img/home2.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImg } from "../styles";

import { scrollReveal } from "../animation";
import { UseScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = UseScroll();
  // view ? console.log('animacion true') : console.log('animacion false');

  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          Servicios de alta <span>Calidad</span>
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Eficiencia</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Tecnología</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Accesible</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Trabajo en equipo</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImg>
        <img src={home2} alt="home2" />
      </StyledImg>
    </StyledServices>
  );
};

/**
 * Si se quiere usar un styled-component reutilizable, pero no queres que se llame igual que como ya existe
 * lo que se hace es usar styled(el stilo que queres usar pero con el nombre original)`` (NO OLVIDAR LOS ``) y listo,
 * lo copado es que se pueden agregar estilos, similar a una herencia
 */

/**
 * Animacion del scroll:
 * Necesito agregarle animacion al styledServices, que sea un motion.div
 * pero el styledAbout NO estaba como motion.div, asi q con ir a editarlo ya se soluciona
 */

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px){
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

`;

export default ServicesSection;
