export const DiscountPercent = (
  id: number,
  originalPrice: number,
  discountedPrice: number
) => {
  if (originalPrice <= 0 || discountedPrice <= 0) {
    alert(`Product with Id : ${id}  should have Price Value greater then 0`);
  }

  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = Math.round((discountAmount / originalPrice) * 100);

  return discountPercentage;
};
