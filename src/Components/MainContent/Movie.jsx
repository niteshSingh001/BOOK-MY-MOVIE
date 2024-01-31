import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setMovies(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Row>
        {movies.map((movie) => (
          <Col className="mt-4" key={movie.show.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesPage;
  
