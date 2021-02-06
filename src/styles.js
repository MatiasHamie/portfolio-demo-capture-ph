import { motion } from "framer-motion";
import styled from "styled-components";

//Styled Components
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  padding: 5rem 10rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* EL display block es para que se ponga todo
  en columnas de nuevo */
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }

  
  @media (max-width: 1700px) {
    padding: 0;

    button{
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImg = styled.div`
  flex: 1;
  overflow: hidden;

  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
