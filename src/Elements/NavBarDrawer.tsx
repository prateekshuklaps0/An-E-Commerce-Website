import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  useDisclosure,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

// Styles Components
import * as css from "../Styles/NavBarStyles";
import { SmallScreenLinksCont } from "../Styles/NavBarStyles";

const NavBarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box css={css.DrawerOuter}>
      <Image css={css.HamburgerIcon} onClick={onOpen} as={SlMenu} />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay css={css.DrawerOverlayCss} />
        <DrawerContent css={css.DrawerContentCss}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            {/* Link To Products */}
            <SmallScreenLinksCont>
              <Text onClick={onClose} as={NavLink} to="/men" css={css.LinksCss}>
                Men
              </Text>
              <Text
                onClick={onClose}
                as={NavLink}
                to="/women"
                css={css.LinksCss}
              >
                Women
              </Text>
              <Text
                onClick={onClose}
                as={NavLink}
                to="/kids"
                css={css.LinksCss}
              >
                Kids
              </Text>
              <Text
                onClick={onClose}
                as={NavLink}
                to="/sneakers"
                css={css.LinksCss}
              >
                Sneakers
              </Text>
            </SmallScreenLinksCont>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBarDrawer;

// NavBarSearch
