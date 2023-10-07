import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Input,
  InputGroup,
  useColorModeValue,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import NavBarSearch from "./NavBarSearch";

// Styles Components
import * as css from "../Styles/NavBarStyles";
import { LinksAndSearchOuter } from "../Styles/NavBarStyles";

const NavBarOptions = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return !showSearchBox ? (
    <LinksAndSearchOuter>
      <Text as={NavLink} to="/products/men" css={css.LinksCss}>
        Men
      </Text>
      <Text as={NavLink} to="/products/women" css={css.LinksCss}>
        Women
      </Text>
      <Text as={NavLink} to="/products/kids" css={css.LinksCss}>
        Kids
      </Text>
      <Text as={NavLink} to="/products/sneakers" css={css.LinksCss}>
        Sneakers
      </Text>

      <Image
        onClick={() => setShowSearchBox(true)}
        css={css.SearchIconCss}
        as={ImSearch}
      />
    </LinksAndSearchOuter>
  ) : (
    <NavBarSearch setShowSearchBox={setShowSearchBox} />
  );
};

export default NavBarOptions;
