
import { Card, Button } from 'react-bootstrap';




export const ProductCard = ({product}) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={product.images} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <p className="card-text small" >{product.description}</p>
          <h5>${product.price}</h5>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};
