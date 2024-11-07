import React, { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Spinner, Button, Row, Col, Badge,Container } from "react-bootstrap";


export const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("productId");
  console.log('iddddd', productId)
  const navigate= useNavigate();

  const HandleBack=()=>{
    navigate("/")
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        console.log('someRespon', response);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (


    <Container className="my-5">
      <Button onClick={HandleBack} variant="secondary" size="lg" className="mb-4">
           <FaArrowLeft/> Back to Home Page
          </Button>
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Card>
            <Card.Img  src={product.images} alt={product.title} />
          </Card>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <h1>{product.title}</h1>

          <h3 className="text-primary">{product.price}</h3>
          
          {/* Rating */}
          <div className="my-2">
            <span className="text-warning">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <Badge bg="secondary" className="ms-2">
              {product.numReviews} reviews
            </Badge>
          </div>

          {/* Product Description */}
          <p className="my-3">{product.description}</p>

          {/* Add to Cart Button */}
          <Button variant="primary" size="lg" className="mt-3">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
    
    
  );
};

export default ItemDetail;
