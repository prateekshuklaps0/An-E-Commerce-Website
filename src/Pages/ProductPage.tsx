import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";

// Files Import
import { getData, productData } from "../Redux/Products/action";
import Filter from "../Components/Filter";
import ProductsList from "../Components/ProductsList";
import SortAndOrder from "../Components/SortAndOrder";
import Pagination from "../Components/Pagination";
import {
  sneakersCate,
  kidsCate,
  womenCate,
  menCate,
} from "../Redux/Categories";

// Styles Components
import * as css from "../Styles/ProductPageStyles";
import { ProductAndFilterCont } from "../Styles/ProductPageStyles";

interface ProductPageType {
  type: string;
}

const ProductPage = ({ SetSingleProductData }: any) => {
  const [searchParam, setSearchParams] = useSearchParams();
  const dispatch: Dispatch<any> = useDispatch();
  const { type } = useParams();
  const URL = useSelector((store: any) => store.API_URL);
  const isLoading = useSelector((store: any) => store.ProductReducer.isLoading);
  const isError = useSelector((store: any) => store.ProductReducer.isError);
  const totalPages = useSelector(
    (store: any) => store.ProductReducer.totalPages
  );
  const Products = useSelector((store: any) => store.ProductReducer.products);
  const CategoriesArray =
    type == "men"
      ? menCate
      : type == "women"
      ? womenCate
      : type == "kids"
      ? kidsCate
      : sneakersCate;

  // States
  const [page, setPage] = useState(Number(searchParam.get("page")) || 1);
  const [limit, setLimit] = useState(9);
  const [SortValue, setSortValue] = useState("Relevance");
  const [OrderValue, setOrderValue] = useState("asc");

  const initailCategory = searchParam.getAll("subCate");
  const [subCate, setSubcate] = useState(initailCategory || CategoriesArray);
  const [category, setCategory] = useState<string[]>([]);
  useEffect(() => {
    const paramObj: any = {
      page,
    };
    if (SortValue != "Relevance") {
      paramObj.sort = SortValue;
      paramObj.order = OrderValue;
    }
    if (subCate) {
      paramObj.subCate = subCate;
    }
    setSearchParams(paramObj);

    return () => {};
  }, [page, SortValue, OrderValue, subCate]);

  type paramTypes = {
    _page: number;
    _limit: number;
    _sort: string | undefined;
    _order: string | undefined;
    subCate: string[];
  };

  type objType = {
    params: paramTypes;
  };

  const obj: objType = {
    params: {
      _page: Number(searchParam.get("page")),
      _limit: limit,
      _sort: SortValue !== "Relevance" ? SortValue : undefined,
      _order: SortValue !== "Relevance" ? OrderValue : undefined,
      subCate: searchParam.getAll("subCate"),
    },
  };

  let URLS = `${process.env.REACT_APP_TESTING_URL}/${type}`;
  // console.log(URLS)
  useEffect(() => {
    dispatch(productData(URLS, obj));
    //productData(())
  }, [CategoriesArray, searchParam]);
  // console.log(Products)
  return (
    <ProductAndFilterCont>
      <Filter
        CategoriesArray={CategoriesArray}
        subCate={subCate}
        setSubcate={setSubcate}
        setCategory={setCategory}
        category={category}
        setSearchParams={setSearchParams}
      />

      <Box css={css.RightSideDiv}>
        <SortAndOrder
          SortValue={SortValue}
          setSortValue={setSortValue}
          OrderValue={OrderValue}
          setOrderValue={setOrderValue}
        />

        <ProductsList type={type} Products={Products} />

        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      </Box>
    </ProductAndFilterCont>
  );
};

export default ProductPage;
