import axios from 'axios';

export const getCartAPI = async () => {
  let response = await axios.get('http://localhost:8080/cart');
  return response.data;
};

export const deleteItemAPI = async (id:any) => {
  await axios.delete(`http://localhost:8080/cart/${id}`);
};