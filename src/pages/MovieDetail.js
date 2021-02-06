import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import styled from "styled-components";
import Award from "../components/Award";

import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

const MovieDetail = () => {
  // useHistory me da info de donde estamos en la pagina (como el path, asi tenemos el /:id)
  const history = useHistory();
  const url = history.location.pathname;

  // Movies se inicializan con el array de datos de peliculas en MovieState.js
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  /** lo ejecuto cada vez que se actualiza la url o las peliculas */
  useEffect(() => {
    const currentMovie = movies.filter((m) => m.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  // console.log(history);

  /**
   * Se va a renderizar todo cuando la pelicula este cargada
   * si no, tira error, ya que se inicializa en null y tarda en
   * traer la info aunque sea en un archivo local
   */
  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movieImg" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="secondary image" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadLine = styled(motion.div)`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1500px){
    margin: 2rem 2rem;
    display: block;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MovieDetail;
