import React from "react";
import { Card, Col, Container, Image, ListGroup, Row, Button } from "react-bootstrap";
import { CartState } from "../context/CartContext";
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col md={9}>
          <Card>
            <Card.Header className="fw-bold fs-4" style={{ background: "white" }}>
              My Cart ({cart.length})
            </Card.Header>
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt="asdf"
                        thumbnail={true}
                        fluid={true}
                        style={{ width: "120px" }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex justify-content-between">
                        <div className="fs-5">{item.name}</div>
                        <div className="fs-6 text-muted fst-italic">
                          {item.deliverySpeed === 1
                            ? "Fast Delivery"
                            : `${item.deliverySpeed} days Delivery`}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div className="fw-bold">
                          <FaRupeeSign style={{ marginBottom: "2px" }} size="13px" />
                          {item.price}
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className="">
                          <Button
                            className="fw-bold p-0"
                            variant="link"
                            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                            style={{ textDecoration: "none", color: "red" }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
