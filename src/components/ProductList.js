import React from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { faker } from "@faker-js/faker";
import { BsStarFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

const ProductList = () => {
  faker.seed(2);
  const products = Array.from({ length: 20 }).map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.nature(),
      inStock: faker.random.arrayElement([0, 1, 2, 3, 4, 5]),
      deliverySpeed: faker.random.arrayElement([1, 2, 3, 4]),
      rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  console.log(products);

  return (
    <Row xs={1} md={3} className="mt-3">
      {products.map((product, idx) => (
        <Col className="mb-3" key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Badge bg="success">
                {Array.from({ length: product.rating }).map((_, idx) => (
                  <BsStarFill key={idx} />
                ))}
              </Badge>
              <div>
                <strong>
                  <FaRupeeSign size="14px" />
                  {product.price}
                </strong>
              </div>
              <div style={{ fontSize: "12px" }}>
                {product.deliverySpeed === 1
                  ? "Fast Delivery"
                  : `${product.deliverySpeed} day Delivery`}
              </div>
              <div className="d-grid gap-2">
                <Button variant="outline-success">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
