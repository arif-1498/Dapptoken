import { Add_to_cart, Remove_from_cart, Clear_cart } from "./constants";

const initial_state = {
  items: [],
};

export const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case Add_to_cart: {
        return{
            ...state,
            items:[...state.items, action.payload]
        }
    }
    case Remove_from_cart: {
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload)
          };
    }
    case Clear_cart: {
      state = [];
    }
    default: {
      return state;
    }
  }
};
