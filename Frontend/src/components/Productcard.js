import { Card, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/actions/CartItems";




export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/itemDetail?productId=${id}`);
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={product.images} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <p className="card-text small">Brand: {product.brand}</p>
          <h5>${product.price}</h5>
          <Button onClick={()=>{dispatch(AddToCart(product))}} variant="primary">
            <FaCartPlus /> Add to Cart
          </Button>
          <Button onClick={() => goToDetailPage(product?.id)}>
            See Detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
