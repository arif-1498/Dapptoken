import { Add_to_cart, Remove_from_cart, Clear_cart } from "./constants";


export const AddToCart=(product)=>{
    return{
            type: Add_to_cart,
            payload: product,
        };
}

export const RemoveFromCart=(productId)=>{
    return{
     type : Remove_from_cart,
     payload: productId,
    };
};

export const ClearCart=(productId)=>{
    return{
        type: Clear_cart,
    }
}