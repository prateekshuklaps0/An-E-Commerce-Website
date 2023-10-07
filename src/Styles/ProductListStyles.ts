import styled from "styled-components";
import { css } from "@emotion/react";

export const ProductListOuter = styled.div`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ProductListCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CardOuter = css`
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  background: rgba(66, 66, 75, 0.407);
  padding-bottom: 20px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CardImageCss = css`
  border-radius: 8px;
  width: 100%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const NameTag = styled.p`
  color: whitesmoke;
  font-size: 17px;
  margin: 10px 10px 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const PriceCont = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 7px 10px 0px 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const NewPriceCss = css`
  color: whitesmoke;
  font-size: 16px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const OldPriceCss = css`
  color: rgb(158, 160, 162);
  font-size: 13px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const DiscountCss = css`
  font-size: 14.5px;
  color: rgb(186, 255, 227);
  font-weight: lighter;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RatingAndReviewCont = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 10px 0px 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const RatingCss = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: light;
  padding: 3px 8px;
  justify-content: space-between;
  gap: 5px;
  border-radius: 50px;
  color: rgb(186, 255, 227);
  border-color: rgb(186, 255, 227);

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ReviewCss = css`
  font-size: 13px;
  font-weight: lighter;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const AddToCartButton = css`
  border-radius: 5px;
  border: 1px solid rgb(189, 191, 193);
  width: 90px;
  text-align: center;
  color: rgba(245, 245, 245, 0.625);
  font-size: 13px;
  padding: 3px 8px;
  font-weight: lighter;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;

  :hover {
    border: 1px solid rgb(189, 191, 193);
    background-color: rgba(245, 245, 245, 0.625);
    color: black;
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
