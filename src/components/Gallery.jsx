import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    moviesList: {},
  };

  fetchMovies = () => {
    const movieName = {
      "Lord of the Rings": "lord-of-the-rings",
      "Star Wars": "star-wars",
      "Harry Potter": "harry-potter",
    };

    Promise.all(
      Object.entries(movieName).map(([name, query]) =>
        fetch(`http://www.omdbapi.com/?s=${query}&apikey=1bacd3b7`)
          .then((resp) => {
            if (resp.ok) return resp.json();
            throw new Error("Dati non recuperati");
          })
          .then((data) => [name, data.Search])
      )
    )
      .then((results) => {
        const moviesList = Object.fromEntries(results);
        this.setState({ moviesList });
      })
      .catch((e) => console.log("errore", e));
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    console.log("questo è render");
    return (
      <Container style={{ color: "white" }} className="bg-black d-flex flex-column flex-nowrap overflow-x-hidden m-auto">
        {Object.entries(this.state.moviesList).map(([category, films]) => (
          <div key={category} className="mb-5">
            <h3 className="">{category}</h3>
            <Row className="justify-content-center flex-nowrap overflow-x-hidden">
              {films.map((film) => (
                <Col key={film.imdbID} xs={12} sm={6} md={4} xl={2} className="p-0">
                  <img src={film.Poster} alt={film.Title} className="img-fluid" />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    );
  }
}

export default Gallery;
