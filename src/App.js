import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col sm="2" id="colSidebar">
            <Sidebar />
          </Col>
          <Col md={{ offset: 2 }}><ProductList /></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
