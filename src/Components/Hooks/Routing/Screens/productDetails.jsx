import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Start as null to check loading state

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <p>Loading product details...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">{product.title}</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} style={{ height: "500px", objectFit: "contain" }} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3">
            <Card.Body>
              <Card.Title>
                <h4>{product.title}</h4>
              </Card.Title>
              <Card.Text>
                <strong>Category:</strong> <Badge bg="secondary">{product.category}</Badge>
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> <span className="text-success">${product.price}</span>
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong>
                <br />
                {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
