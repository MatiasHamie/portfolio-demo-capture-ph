import React from "react";
import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">1. Acerca de</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "35%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Nuestro Trabajo</Link>
          <StyledLine2
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contactanos</Link>
          <StyledLine3
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  position: sticky;
  top: 0;
  z-index: 90;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      padding-left: 14rem;
      position: relative;
    }
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    /* Cuando se tenga un problema y se quiera ponerle margin o padding a un <a></a>
    se tiene q poner un display: inline-block */
    #logo {
      display: inline-block;
      margin: 2rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
      }
    }
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 70%;

  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const StyledLine2 = styled(StyledLine)`
  left: 60%;
`;
const StyledLine3 = styled(StyledLine2)`
  left: 65%;
`;

export default Nav;
