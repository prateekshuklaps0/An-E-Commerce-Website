import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Text,
} from "@chakra-ui/react";

// Styles Import
import * as css from "../Styles/ProductPageStyles";
import {
  FilterCont,
  CategoryTextAndResetBtnCont,
} from "../Styles/ProductPageStyles";

import { useSearchParams } from "react-router-dom";
const Filter = ({
  CategoriesArray,
  subCate,
  setSubcate,
  setCategory,
  category,
  setSearchParams,
}: any) => {
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log(value)
    let newCategory = [...subCate];
    if (subCate.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }

    setSubcate(newCategory);
  };
  // useEffect(() => {
  //   if(subCate){
  //     paramObj.subCate=subCate
  //   }

  //   setSearchParams(paramObj)
  // }, [subCate])
  //  console.log(subCate)

  return (
    <FilterCont>
      <CategoryTextAndResetBtnCont>
        <Text>Categories :</Text>
        <Center>Clear</Center>
      </CategoryTextAndResetBtnCont>
      <Box css={css.CheckBoxContainer}>
        {CategoriesArray.map((item: any, ind: number) => (
          <Checkbox
            css={css.CheckBoxInputCss}
            key={item}
            colorScheme="teal"
            value={item}
            checked={subCate.includes(item)}
            onChange={handleCategory}
            // defaultChecked
          >
            {item}
          </Checkbox>
        ))}
      </Box>
    </FilterCont>
  );
};

export default Filter;

interface FilterTypes {
  CategoriesArray: Array<any>;
}
