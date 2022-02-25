import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
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
          <Col sm="10"></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
