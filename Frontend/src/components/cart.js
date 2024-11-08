import { ListGroup, Button, Stack } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveFromCart} from "../Redux/actions/CartItems";

export const Cartbox = () => {
  const itemdata = useSelector((state) => state.cart.items);
  const dispatch= useDispatch();
  console.log("state item data: ", itemdata);
  return (
    <>
      <h1>shoping card component</h1>

      {itemdata.map((item) => (
        <ListGroup.Item
          key={item.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <img
              src={item.images}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              className="me-3"
            />
            <div>
              <h6 className="mb-0">{item.title}</h6>
              <small>Quantity: 1</small>
            </div>
          </div>
          <div className="text-end">
            <span className="d-block mb-1">${item.price}</span>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                dispatch(RemoveFromCart(item.id));
              }}
            >
              <i className="bi bi-trash"></i> Remove
            </Button>
          </div>
        </ListGroup.Item>
      ))}

      <div className="mt-4">
        <Stack direction="horizontal" gap={3}>
          <Button variant="success" block>
            Checkout
          </Button>
          <FaTrash variant="danger" block>
            clear cart
          </FaTrash>
        </Stack>
      </div>
    </>
  );
};
