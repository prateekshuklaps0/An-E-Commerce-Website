import styled from "styled-components";
import { css } from "@emotion/react";


export const NavBarOuter = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(44, 44, 46, 0.647);
  backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  color: rgb(189, 191, 193);
  padding: 0px 40px;

  @media (max-width: 800px) {
    padding: 0px 40px;
    height: 50px;
  }
  @media (max-width: 600px) {
    flex-direction: row-reverse;
    padding: 0px 30px;
    height: 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 15px;
    height: 40px;
  }
`;
// NavBar Options Css
export const LinksAndSearchOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Inter;
  width: 360px;

  @media (max-width: 800px) {
    width: 300px;
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const LinksCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(189, 191, 193);

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
    letter-spacing: 0.5px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 0.5px;
  }
`;
export const SearchIconCss = css`
  color: rgb(189, 191, 193);
  cursor: pointer;

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;

// NavBar SearchBox Css
export const SearchCont = css`
  width: 380px;
  color: white;
  display: flex;
  align-items: center;
  outline: none;
  border: none;

  @media (max-width: 800px) {
    width: 325px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;
export const BoxIcons = css`
  color: rgb(189, 191, 193);
  cursor: pointer;
  font-size: 20px;

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InputCss = css`
  outline: none;
  border: none;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;

  ::placeholder {
    color: rgb(189, 191, 193);
  }

  :focus {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    width: auto;
    background-color: transparent;
  }
  @media (max-width: 480px) {
  }
`;
export const SmallScreenSearchCss = css`
  outline: none;
  border: none;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  display: none;

  ::placeholder {
    color: rgb(189, 191, 193);
  }

  :focus {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    display: inline;
    width: auto;
    background-color: transparent;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    letter-spacing: 0.4px;
    word-spacing: 0px;
  }
`;

// NavBar Cart & LogIn / SignUp Css
export const CartAndLoginOuter = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  text-align: center;
  font-family: Inter;

  @media (max-width: 800px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
`;
export const CartIconCss = css`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;
export const LogInIconCss = css`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;

  :hover {
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;

export const ShowMobileScreenSearch = css`
  display: none;

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
    display: inline;
  }
  @media (max-width: 480px) {
  }
`;

// NavBar Drawer Css
export const HamburgerIcon = css`
  color: rgb(189, 191, 193);

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const DrawerOuter = css`
  display: none;

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
    display: inline;
  }
  @media (max-width: 480px) {
  }
`;
export const DrawerContentCss = css`
  display: none;
  background: rgba(44, 44, 46, 0.647);
  backdrop-filter: blur(15px);
  color: white;

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
    display: inline;
  }
  @media (max-width: 480px) {
  }
`;
export const DrawerOverlayCss = css`
  display: none;

  @media (max-width: 600px) {
    display: inline;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
export const SmallScreenLinksCont = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

// Emotion Css Template
/*

export const A = css`
  
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

*/
