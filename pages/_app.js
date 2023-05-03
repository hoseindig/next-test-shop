import Footer from "@/components/footer";
import Header from "@/components/header";
import MainBox from "@/components/mainBox";
import Sidebar from "@/components/sidebar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Row, Col, Container } from "react-bootstrap";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Container>
        <Row>
          <Header></Header>
        </Row>
        <Row className="main-box">
          <Col md={10}>
            <Component {...pageProps} />
          </Col>
          <Col md={2}>
            <Sidebar></Sidebar>
          </Col>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
        <ToastContainer position="bottom-right" />
      </Container>
    </>
  );
}
