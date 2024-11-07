
import { Card, Button } from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';




export const ProductCard = ({product}) => {

  const params = new URLSearchParams();
  params.append('website', 'geeks');

  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={product.images} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <p className="card-text small" >Brand:{product.brand}</p>
          <h5>${product.price}</h5>
          <Button variant="primary"> <FaCartPlus/> Add to Cart</Button>
          <Button
            onClick={params.append("?productId", `${product?.id}`)}
            // onClick={console.log('arif', product?.id)}
          >See Detail</Button>
        </Card.Body>
      </Card>
    </>
  );
};
