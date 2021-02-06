import React from "react";
import { pageAnimation, titleAnimation } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>Contactate</motion.h2>
        </StyledHide>
      </StyledTitle>

      <div>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Envianos un mensaje</h2>
          </StyledSocial>
        </StyledHide>

        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Envianos un email</h2>
          </StyledSocial>
        </StyledHide>

        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle />
            <h2>Redes sociales</h2>
          </StyledSocial>
        </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1500px){
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    overflow-y: none;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px){
    margin-top: 5rem;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
