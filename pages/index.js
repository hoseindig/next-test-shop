import {
  Carousel,
  Button,
  Nav,
  Container,
  Form,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

const MainPage = () => {
  const imagesBanner = [
    { id: 1, url: "images/banner/1.jpg" },
    { id: 2, url: "images/banner/2.jpg" },
    { id: 3, url: "images/banner/3.jpg" },
    { id: 4, url: "images/banner/4.jpg" },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1>home page</h1>
            <Carousel>
              {imagesBanner.map((img, index) => {
                return (
                  <Carousel.Item key={img.id}>
                    <img
                      className="d-block w-100"
                      src={img.url}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
