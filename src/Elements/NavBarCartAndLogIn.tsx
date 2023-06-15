import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

// Styles Components
import * as css from "../Styles/NavBarStyles";
import { CartAndLoginOuter } from "../Styles/NavBarStyles";

const NavBarCartAndLogIn = () => {
  return (
    <CartAndLoginOuter>
      <Image css={css.LogInIconCss} as={RxPerson} />
      <Image css={css.CartIconCss} as={FiShoppingCart} />
    </CartAndLoginOuter>
  );
};

export default NavBarCartAndLogIn;
