import styled from "styled-components";
import { css } from "@emotion/react";

export const Outer = css`
  background: rgb(77, 77, 79);
  width: 100%;
  font-family: Inter;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  //color: rgb(189, 191, 193);

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CloseIcon = css`
  color: white;
  cursor: pointer;
  margin: 40px 0px 0px 40px;
  font-size: 30px;
  color: rgb(189, 191, 193);

  :hover {
    color: whitesmoke;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InnerCont = css`
  width: 80%;
  margin: auto;
  margin-top: -30px;
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ImageContainer = css`
  width: 45%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ChildImagesCont = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ChildImagesStyles = css`
  width: 80%;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    transform: scale(102%);
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ImageCss = css`
  width: 70%;
  border-radius: 8px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DetailsOuterCont = css`
  width: 50%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const TitleCss = css`
  font-size: 25px;
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const Brand = css`
  font-size: 18px;
  color: rgb(203, 215, 227);

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const PriceCont = css`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const NewPriceText = css`
  font-size: 20px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DiscountText = css`
  font-size: 16px;
  color: rgb(186, 255, 227);

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const OldPriceCont = css`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 3px;
  margin-left: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const OldPriceText = css`
  color: rgb(203, 215, 227);
  font-size: 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InclusiveTaxes = css`
  color: rgb(203, 215, 227);
  font-size: 13.5px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// Customer Rating and Rewiews
export const RatingAndReviewsCont = css`
  margin-top: 15px;
  margin-left: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CustReviewsHead = css`
  color: rgb(203, 215, 227);
  font-size: 18px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const StarsCont = css`
  display: flex;
  align-items: center;
  gap: 7px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const StarIcons = css`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RAndRCont = css`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RatingCss = css`
  border: 1px solid rgb(186, 255, 227);
  padding: 3px 7px;
  border-radius: 8px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ReviewsCss = css`
  color: rgb(229, 227, 227);
  font-size: 14px;
  margin-top: 5px;
  margin-left: 5px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

//  Delivery Details
export const DeliveryDetailsCont = css`
  display: flex;
  gap: 25px;
  margin-top: 25px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DDCard = css`
  width: 90px;
  text-align: center;
  color: rgb(229, 227, 227);

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DDIconsCss = css`
  display: inline;
  font-size: 20px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DDTextCss = css`
  font-size: 14px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const AddCartCont = css`
  text-align: center;
  margin-top: 50px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const AddCartBtn = css`
  background-color: rgba(245, 245, 245, 0.625);
  padding: 3px 12px;

  :hover {
    background-color: rgb(203, 215, 227);
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

/* Css Template

export const A = css`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const ProductsCont = styled.div`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
