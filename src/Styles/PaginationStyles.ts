import styled from "styled-components";
import { css } from "@emotion/react";

export const OuterBox = css`
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
export const InnerCont = styled.div`
  width: 370px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const PagesCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    width: 177px;
    border-radius: 5px;
  }
`;
export const PageDisplayCont = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  backdrop-filter: blur(15px);
  background: rgba(66, 66, 75, 0.823);
  text-align: center;
  width: 100px;
  font-family: Inter;
  height: 35px;
  padding: 0px 15px 0px 15px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    border-radius: 5px;
    width: 85px;
    height: 32px;
    padding: 0px 9px 0px 9px;
    font-size: 14px;
  }
`;
export const NextPrevBtn = css`
  color: rgb(203, 215, 227);
  text-align: center;
  border-radius: 5px;
  backdrop-filter: blur(15px);
  background: rgba(66, 66, 75, 0.823);
  height: 35px;
  width: 10px;

  :hover {
    background: rgba(66, 66, 75, 0.867);
  }

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    border-radius: 6px;
    width: 10px;
    height: 32px;
    font-size: 16px;
  }
`;
export const ArrowIconsCss = css`
  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Go To Css
export const GoToCont = css`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  font-family: Inter;
  font-size: 16px;
  font-weight: lighter;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    width: 100px;
    font-size: 14px;
    margin-left: 10px;
  }
`;
export const GoToBtn = css`
  color: white;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-family: Inter;
  color: rgb(229, 227, 227);
  width: 150px;
  height: 35px;
  /* border-radius: 5px; */
  backdrop-filter: blur(15px);
  background: rgba(66, 66, 75, 0.823);
  text-align: center;

  :hover {
    background: rgba(66, 66, 75, 0.867);
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 32px;
  }
`;
export const GoToInput = css`
  color: white;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  text-align: center;
  height: 36px;
  /* border-radius: 5px; */
  backdrop-filter: blur(15px);
  background: rgba(66, 66, 75, 0.823);
  font-size: 16px;
  color: rgb(203, 215, 227);

  &:focus {
    backdrop-filter: blur(15px);
    background: rgba(66, 66, 75, 0.823);
    outline: none;
    border: none;
    box-shadow: none;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 32px;
  }
`;
export const GoToInputEmpty = css`
  color: white;
  border-radius: 5px;
  font-size: 16px;
  color: rgb(158, 160, 162);
  text-align: center;
  border-radius: 5px;
  backdrop-filter: blur(15px);
  background: rgba(66, 66, 75, 0.823);
  height: 36px;

  :focus {
    border-radius: 5px;
    backdrop-filter: blur(15px);
    background: rgba(66, 66, 75, 0.823);
    outline: none;
    border: none;
    box-shadow: none;
  }

  ::placeholder {
    color: rgb(203, 215, 227);
    font-size: 14px;
  }

  :hover {
    background: rgba(66, 66, 75, 0.867);
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 22px;
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
