import React, { useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import Logo from "../Elements/Logo";
import NavBarOptions from "../Elements/NavBarOptions";
import NavBarCartAndLogIn from "../Elements/NavBarCartAndLogIn";
import NavBarDrawer from "../Elements/NavBarDrawer";
import { Link } from "react-router-dom";
// Styles Components
import * as css from "../Styles/NavBarStyles";
import { NavBarOuter } from "../Styles/NavBarStyles";

const Navbar = () => {
  const [dummyState, setDummyState] = useState(false);

  return (
    <NavBarOuter>
      <Logo />
      <NavBarOptions />
      <NavBarCartAndLogIn />

      <Input
        type="text"
        placeholder="Search Men, Women, Kids & Sneakers"
        css={css.SmallScreenSearchCss}
      />

      <NavBarDrawer />
    </NavBarOuter>
  );
};

export default Navbar;
