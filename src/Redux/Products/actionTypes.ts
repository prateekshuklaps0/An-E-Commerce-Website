// Get Request Action Types
export const GetRequestSuccess = "GetRequestSuccess";
export const GetRequestLoading = "GetRequestLoading";
export const GetRequestError = "GetRequestError";

export interface Action {
  type: string;
  payload?: any;
}
