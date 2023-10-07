import { Dispatch } from "redux";
import {
  GET_CART_LOADING,
  GET_CART_ERROR,
  ADD_TO_CART,
  GET_CART_SUCCESS,
  DELETE_CART,
} from "./actionType";
import { getCartAPI, deleteItemAPI } from "./cart.api";

// Object Function
export const AddCartObj = (payload: any) => {
  return { type: ADD_TO_CART, payload };
};

//   here i have to get current user email
let currentUser = { email: "havetoenter" };

export const getCartData = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let response = await getCartAPI();
    let data = response.data;
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const deleteItem = (id: any) => async (dispatch: any) => {
  await deleteItemAPI(id);
  dispatch(getCartData());
};

// Add Data to Cart Function
export const AddToCart = (item: any) => (dispatch: any) => {
  dispatch(AddCartObj(item));
  // console.log(item);
};


export const DeleteCartObj = (payload: any) => {
  return { type: DELETE_CART, payload };
};

// export const deleteCartItem = (id: any) => {
//   return { type: DELETE_CART, payload: id };
// };


