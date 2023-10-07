interface FindProductItem {
  setProductItem: React.Dispatch<React.SetStateAction<{}>>;
  ProductArray: Array<any>;
  id: number;
}

// This Function Finds Single Product from Products Store Array
export const FindProductItem = ({
  setProductItem,
  ProductArray,
  id,
}: FindProductItem) => {
  const foundItem = ProductArray.filter((item, ind) => item.id == id);
  setProductItem(foundItem[0]);
};
