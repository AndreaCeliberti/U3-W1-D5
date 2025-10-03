import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    moviesList: [],
  };

  fetchMovies = () => {
    fetch(`http://www.omdbapi.com/?s=star-wars&apikey=1bacd3b7`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Dati non recuperati");
        }
      })
      .then((movies) => {
        console.log("risposta api", movies);
        this.setState({
          moviesList: movies.Search,
        });
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };

  componentDidMount() {
    console.log("questo è il didmount");
    this.fetchMovies();
  }

  render() {
    console.log("questo è render");
    return (
      <Container style={{ color: "white" }} className="bg-black d-flex mw-75 m-auto">
        {this.state.moviesList.map((film) => {
          return (
            <>
              <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} xl={2} className=" p-0">
                  <img src={film.Poster} alt="" />
                </Col>
              </Row>
            </>
          );
        })}
      </Container>
    );
  }
}

export default Gallery;
