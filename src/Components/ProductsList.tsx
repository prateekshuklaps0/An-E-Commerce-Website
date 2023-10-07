import React, { useState } from "react";
import { DiscountPercent } from "../Functions/DiscountPercent";
import {
  Box,
  Image,
  useDisclosure,
  Text,
  Button,
  Badge,
  Center,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCartPlus, BsFillCartPlusFill } from "react-icons/bs";

// Styles Import
import * as css from "../Styles/ProductListStyles";
import {
  ProductListOuter,
  ProductListCont,
  NameTag,
} from "../Styles/ProductListStyles";
import SingleProductPage from "../Pages/SingleProductPage";

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/carts/action";
export const ADD_PRODUCT: string = "ADD_PRODUCT";

interface ProductsListType {
  type: any;
  Products: Array<any>;
}

interface NavigateType {
  target: string;
}

const ProductsList = ({ Products, type }: ProductsListType) => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);

  const dispatch: any = useDispatch();
  const addProduct = useSelector(
    (store: any) => store.ProductReducer.addProduct
  );

  interface reducerTypes {
    type: string;
    payload: any;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [SingleProductData, setSingleProductData] = useState<any>({});

  const handleCardClick = (item: any) => {
    setSingleProductData(item);
    onOpen();
  };

  return (
    <ProductListOuter>
      <ProductListCont>
        {Products.map((item, ind) => (
          <Box
            onClick={() => handleCardClick(item)}
            key={item.id + item.name}
            css={css.CardOuter}
          >
            {imageLoading && <h1>Loading</h1>}

            <Image
              onLoad={() => setImageLoading(false)}
              src={item.img}
              alt={item.name}
              css={css.CardImageCss}
            />
            <NameTag>{item.name}</NameTag>
            <Box css={css.PriceCont}>
              <Text css={css.NewPriceCss}>&#x20B9; {item.newPrice}</Text>
              {item.newPrice != item.oldPrice && (
                <Text css={css.OldPriceCss}>
                  <s>&#x20B9; {item.oldPrice}</s>
                </Text>
              )}
              {item.newPrice != item.oldPrice && (
                <Text css={css.DiscountCss}>
                  {DiscountPercent(item.id, item.oldPrice, item.newPrice)}%
                </Text>
              )}
            </Box>
            <Box css={css.RatingAndReviewCont}>
              <Badge css={css.RatingCss} variant="outline">
                {item.rating} <Image as={AiTwotoneStar} />
              </Badge>
              <Text css={css.ReviewCss}>Based on {item.review} reviews</Text>
            </Box>
          </Box>
        ))}
      </ProductListCont>

      {/* SingleProduct Modal */}
      <SingleProductPage
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        SingleProductData={SingleProductData}
      />
    </ProductListOuter>
  );
};
export default ProductsList;
