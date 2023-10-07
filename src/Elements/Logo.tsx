import React from "react";
import { css } from "@emotion/react";
import { Box, Text, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  const HighLightStyles = {
    color: "#d7d6fd",
  };

  return (
    <Box css={LogoCont}>
      <Text css={TextCss} as={Link} to="/">
        <Highlight query="G" styles={HighLightStyles}>
          Glam Grab
        </Highlight>
      </Text>
    </Box>
  );
};

export default Logo;

const LogoCont = css`
  display: inline;

  @media (max-width: 800px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
`;
const TextCss = css`
  font-family: K2D;
  font-weight: 600;
  font-size: 28px;
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    display: flex;
  }
`;
