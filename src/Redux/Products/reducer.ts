import { ADD_PRODUCT } from "../../Components/ProductsList";
import { getUniqueSubCates } from "../../Functions/GetSubCate";
import {
  GetRequestLoading,
  GetRequestError,
  GetRequestSuccess,
} from "./actionTypes";

// This function returns DataBase URL
export const API_URL = () => {
  const URL = process.env.REACT_APP_TESTING_URL;
  return URL;
};

const initState = {
  isLoading: false,
  isError: false,
  totalPages: 0,
  products: [],
  categories: [],
  addProduct: [],
};

export const reducer = (
  state = initState,
  { type, payload, totalPages }: any
) => {
  switch (type) {
    case GetRequestLoading: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GetRequestError: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GetRequestSuccess: {
      let Cate = getUniqueSubCates([...payload]);
      // console.log(payload);

      return {
        ...state,
        isLoading: false,
        products: payload,
        categories: Cate,
        totalPages: totalPages,
      };
    }
    case ADD_PRODUCT: {
      return { ...state, addProduct: [...state.addProduct, payload] };
    }
    default: {
      return initState;
    }
  }
};
