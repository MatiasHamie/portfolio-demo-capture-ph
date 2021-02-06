import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { UseScroll } from "./useScroll";

/**
 * AnimateSharedLayout lo que hace es detectar si hay un cambio
 * en lo que esta dentro y lo anima PERO no va a funcionar hasta que
 * pongas todo como motion. algo
 */

const FaqSection = () => {
  const [element, controls] = UseScroll();

  return (
    <StyledFaq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Preguntas <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Como empiezo?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              cupiditate?
            </p>
          </div>
        </Toggle>

        <Toggle title="Programacion diaria">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              cupiditate?
            </p>
          </div>
        </Toggle>

        <Toggle title="Diferentes métodos de pago">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              cupiditate?
            </p>
          </div>
        </Toggle>

        <Toggle title="Qué productos ofrecen?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
              cupiditate?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
