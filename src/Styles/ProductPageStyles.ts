import styled from "styled-components";
import { css } from "@emotion/react";

// Filter And Product Container
export const ProductAndFilterCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 90px 150px 0px 150px;
  background: rgb(44, 44, 46);
  color: rgb(189, 191, 193);
  font-family: Inter;
  padding-bottom: 150px;

  @media (max-width: 800px) {
    padding-top: 50px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

export const RightSideDiv = css`
  width: 150%;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// Filter Css
export const FilterCont = styled.div`
  width: 40%;
  background: rgba(66, 66, 75, 0.407);
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 5px;
  border-radius: 8px;
  padding: 20px 20px;
  gap: 30px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CategoryTextAndResetBtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: rgb(189, 191, 193);
    font-size: 18px;
    letter-spacing: 0.3px;
  }

  div {
    color: rgb(189, 191, 193);
    font-size: 14px;
    border: 1px solid rgb(189, 191, 193);
    border-radius: 5px;
    padding: 1px 8px;
    cursor: pointer;

    :hover {
      border: 1px solid rgb(203, 215, 227);
      color: rgb(203, 215, 227);
    }
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CheckBoxContainer = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 16px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const CheckBoxInputCss = css`
  font-size: 13px;

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

// Sort And Order Css
export const SortAndOrderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  //border: 1px solid red;
  margin-bottom: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenuOuter = css`
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenuPlaceholderCss = css`
  background: rgba(66, 66, 75, 0.407);
  display: flex;
  align-items: center;
  gap: 10px;
  //border: 1px solid rgb(189, 191, 193);
  border-radius: 5px;
  padding: 4px 15px;

  span {
    color: rgb(203, 215, 227);
    letter-spacing: 0.4px;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const MenusCont = css`
  background: rgb(44, 44, 46);
  border: none;
  outline: none;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ActiveMenuItemCss = css`
  color: rgb(203, 215, 227);
  border: 1px solid rgba(203, 215, 227, 0.566);
  background: rgb(44, 44, 46);
  border-radius: 5px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InActiveMenuItemCss = css`
  background: rgb(44, 44, 46);

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
// Order Css
export const OrderCont = css`
  display: flex;
  align-items: center;
  font-size: 14px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const ActiveOrderCss = css`
  //border: 1px solid rgb(189, 191, 193);
  background: rgba(66, 66, 75, 0.407);
  color: rgb(229, 227, 227);
  border-radius: 6px;
  padding: 4px 10px;
  width: 110px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InActiveOrderCss = css`
  width: 110px;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  color: rgba(203, 215, 227, 0.566);

  :hover {
    color: rgb(211, 210, 210);
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
