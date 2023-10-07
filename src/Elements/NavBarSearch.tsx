import React, { useState, useRef, useEffect } from "react";
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

// Styles Components
import * as css from "../Styles/NavBarStyles";

interface NavBarSearchProps {
  setShowSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarSearch = ({ setShowSearchBox }: NavBarSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputGroup css={css.SearchCont}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search Men, Women, Kids & Sneakers"
        css={css.InputCss}
      />
      <InputRightElement onClick={() => setShowSearchBox(false)}>
        <Image as={AiOutlineClose} css={css.BoxIcons} />
      </InputRightElement>
    </InputGroup>
  );
};

export default NavBarSearch;
