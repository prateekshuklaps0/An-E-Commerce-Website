import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Input,
  Select,
  Tabs,
  Image,
  TabList,
  Center,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdSort } from "react-icons/md";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import {
  SortAndOrderCont,
  ProductAndFilterCont,
} from "../Styles/ProductPageStyles";

interface SortAndOrderType {
  SortValue: string;
  setSortValue: any;
  OrderValue: string;
  setOrderValue: any;
}

const SortAndOrder = ({
  SortValue,
  setSortValue,
  OrderValue,
  setOrderValue,
}: SortAndOrderType) => {
  const handleSelect = (selectedValue: string) => {
    setSortValue(selectedValue);
  };

  return (
    <SortAndOrderCont>
      <Menu>
        <MenuButton as={Box} cursor="pointer">
          <Text css={css.MenuPlaceholderCss}>
            <MdSort />
            Sort by : <span>{SortValue}</span>
          </Text>
        </MenuButton>
        <MenuList css={css.MenusCont}>
          <MenuItem
            onClick={() => handleSelect("Relevance")}
            css={
              SortValue == "Relevance"
                ? css.ActiveMenuItemCss
                : css.InActiveMenuItemCss
            }
          >
            Relevance
          </MenuItem>
          <MenuItem
            onClick={() => handleSelect("newPrice")}
            css={
              SortValue == "Price"
                ? css.ActiveMenuItemCss
                : css.InActiveMenuItemCss
            }
          >
            Price
          </MenuItem>
          <MenuItem
            onClick={() => handleSelect("rating")}
            css={
              SortValue == "Rating"
                ? css.ActiveMenuItemCss
                : css.InActiveMenuItemCss
            }
          >
            Ratings
          </MenuItem>
          <MenuItem
            onClick={() => handleSelect("review")}
            css={
              SortValue == "Reviews"
                ? css.ActiveMenuItemCss
                : css.InActiveMenuItemCss
            }
          >
            Reviews
          </MenuItem>
        </MenuList>
      </Menu>

      {SortValue != "Relevance" && (
        <Box css={css.OrderCont}>
          <Center
            onClick={() => setOrderValue("asc")}
            css={
              OrderValue == "asc" ? css.ActiveOrderCss : css.InActiveOrderCss
            }
          >
            Low — High
          </Center>
          <Center
            onClick={() => setOrderValue("desc")}
            css={
              OrderValue == "desc" ? css.ActiveOrderCss : css.InActiveOrderCss
            }
          >
            High — Low
          </Center>
        </Box>
      )}
    </SortAndOrderCont>
  );
};

export default SortAndOrder;
