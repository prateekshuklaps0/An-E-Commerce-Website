// action.ts
import { Dispatch} from "redux";
import axios, { AxiosResponse } from "axios";
import {
  Action,
  GetRequestLoading,
  GetRequestError,
  GetRequestSuccess,
} from "./actionTypes";


// Action Object Functions
const setLoadingGetRequest = () => {
  return { type: GetRequestLoading };
};
const setErrorGetRequest = () => {
  return { type: GetRequestError };
};
const setSuccessGetRequest = (payload: any, totalPages: number) => {
  return { type: GetRequestSuccess, payload, totalPages };
};

// Get Request Function
export const getData = (url: string, dispatch: Dispatch) => {
  dispatch(setLoadingGetRequest());
  axios({
    method: "get",
    url: url,
  })
    .then((res) => {
      // console.log(res.data);

      const totalPages = res.headers["x-total-count"];
      
      dispatch(setSuccessGetRequest(res.data, totalPages));
    })
    .catch((err) => {
      console.log(err);

      dispatch(setErrorGetRequest());
    });
};
type paramTypes = {
  _page: number;
  _limit: number;
  _sort: string|undefined;
  _order: string|undefined;
  subCate: string[];
};

type objType = {
  params: paramTypes;
};


 export const productData = (url:string, obj:objType) =>(dispatch:Dispatch)=>{
    dispatch(setLoadingGetRequest())
     axios.get(url, obj)
     
     .then((res)=>{
      const totalPages = res.headers["x-total-count"];  
      dispatch(setSuccessGetRequest(res.data, totalPages));
     })
     .catch((err) => {
      console.log(err);

      dispatch(setErrorGetRequest());
    });
 }