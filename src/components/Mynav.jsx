import { Nav, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function MyNav() {
  return (
    <Navbar expand="lg" style={{ color: "white" }} className=" bg-black d-flex justify-content-between">
      <Container className="text-white">
        <Navbar.Brand style={{ color: "white" }} href="#">
          <img style={{ height: "60px" }} src="./src/assets/netflix_logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "grey" }} href="#">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="#">
              TV Shows
            </Nav.Link>
          </Nav>

          <Nav className="me-auto">
            <Nav.Link style={{ color: "grey" }} href="#">
              Movies
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "grey" }} href="#">
              Recently Added
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "grey" }} href="#">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="d-flex justify-content-end">
        <Navbar.Brand style={{ color: "white" }} href="#">
          <img style={{ height: "60px" }} src="../src/assets/kids_icon.png" alt="" />
        </Navbar.Brand>
      </Container>
    </Navbar>

    // ho provato il refactoring della vecchia nav ma ci mettevo troppo tempo ed ho fatto prima a ricrearla

    // <Navbar className="navbar navbar-expand-lg bg-body-#141414" data-bs-theme="dark">
    //   <Container className="container-fluid ">
    //     <Row>
    //       <a className="navbar-brand" href="#">
    //         <img style="height: 60px;" className="img-fluid " src="./assets/img/netflix_logo.png" alt="netflix_logo" />
    //       </a>
    //     </Row>
    //    <Container className="text-white">
    //   <Navbar.Brand style={{ color: "white" }} href="#">
    //     <img src="" alt="" />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto">
    //       <Nav.Link style={{ color: "white" }} href="#">
    //         About
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Container>
    //
    //       <Col className="d-flex" role="search">
    //         <Button className="text-white btn" type="submit">
    //           <i className="bi bi-search"></i>
    //         </Button>
    //       </Col>
    //       <Col className="d-flex">
    //         <Button className="text-white btn" type="submit">
    //           KIDS
    //         </Button>
    //       </Col>
    //       <Col className="d-flex">
    //         <Button className="text-white btn" type="submit">
    //           <i className="bi bi-bell-fill"></i>
    //         </Button>
    //       </Col>
    //       <Col className="text-white nav-item ">
    //         <a className="text-white nav-link " href="#" role="button">
    //           <img style=" height: 50px;" src="#" alt="kids_icon" />
    //         </a>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Navbar>
  );
}

export default MyNav;
