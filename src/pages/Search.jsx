import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../redux/actions/searchActions";

function SearchThree() {
  const location = useLocation();
  const { query } = location.state;
  const dispatch = useDispatch()

  const movies = useSelector((state) => state.search.searchResults)

    useEffect(() => {
      dispatch(searchMovies(query));
    }, [dispatch, query]);

  const InputValue = () => {
    if (query !== "") {
      return (
        <h3 style={{ marginTop: "6rem", color: "#DADADA" }}>
          <b>Search Result "{query}"</b>
        </h3>
      );
    }
    return query;
  };

  return (
    <div className="bg">
      <Container>
        <Row>
          {<InputValue />}
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Col sm={12} md={6} lg={3} key={movie.id}>
                <Link
                  to={`/details/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="card"
                    style={{ marginBottom: "50px", borderRadius: "10px" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={`${movie.title} poster`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />

                    <Card.Body
                      className="card-content"
                      style={{ height: "90px" }}
                    >
                      <Card.Title className="card-title text-center text-white">
                        <b>{movie.title}</b>
                      </Card.Title>
                      {/* <p className="card-text">{movie.release_date}</p>
                  <p className="card-text">{movie.overview}</p> */}
                      {/* <Button variant="danger" className="ms-2" style={{ borderRadius: "20px", width: "120px" }}>
                    See Details
                  </Button> */}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <h3 className="text-white mt-5">
              <b>Oops.. No result found</b>
            </h3>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default SearchThree;
