import * as css from "../Styles/SinglePageStyles";
import React, { useEffect, useState } from "react";
import {
  Box,
  useDisclosure,
  Text,
  Input,
  Image,
  Button,
  Badge,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf, BsCashCoin, BsTruck } from "react-icons/bs";
import { RiDeleteBack2Fill, RiDeleteBack2Line } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";

// Files Import
import { FindProductItem } from "../Functions/FindProductItem";
import { getData } from "../Redux/Products/action";
import { DiscountPercent } from "../Functions/DiscountPercent";
import Navbar from "../Components/Navbar";
import { AddCartObj, AddToCart } from "../Redux/carts/action";

const SingleProductPage = ({
  SingleProductData,
  isOpen,
  onOpen,
  onClose,
}: any) => {
  const {
    id,
    brand,
    name,
    oldPrice,
    newPrice,
    subCate,
    category,
    img,
    images,
    rating,
    review,
  } = SingleProductData;
  const dispatch: any = useDispatch();

  // Rating Stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image css={css.StarIcons} key={"full" + i} as={AiTwotoneStar} />
      );
    }
    if (hasHalfStar) {
      stars.push(<Image css={css.StarIcons} as={BsStarHalf} />);
    }
    return stars;
  };

  const handleAddToCart = () => {
    dispatch(AddToCart(SingleProductData));
  };

  return (
    <Modal closeOnEsc onClose={onClose} size={"full"} isOpen={isOpen}>
      <ModalContent css={css.Outer}>
        {/* Close Modal Icon */}
        <Image
          onClick={() => onClose()}
          as={RiDeleteBack2Line}
          css={css.CloseIcon}
        />

        {/* <ModalBody> */}
        <Box css={css.InnerCont}>
          {/* Image Container */}
          <Box css={css.ImageContainer}>
            <Box css={css.ChildImagesCont}>
              {images?.map((item: any, ind: number) => (
                <Image
                  key={name + ind}
                  src={item}
                  css={css.ChildImagesStyles}
                  alt={name}
                />
              ))}
            </Box>
            <Image src={img} css={css.ImageCss} alt={name} />
          </Box>

          {/* Product Details */}
          <Box css={css.DetailsOuterCont}>
            <Text css={css.TitleCss}>{name}</Text>
            <Text css={css.Brand}>{brand}</Text>

            {/* New Price */}
            <Box css={css.PriceCont}>
              <Text css={css.NewPriceText}>&#8377;{newPrice}</Text>
              {newPrice != oldPrice && (
                <Text css={css.DiscountText}>
                  {DiscountPercent(id, oldPrice, newPrice)}%
                </Text>
              )}
            </Box>

            {/* Old Price */}
            <Box css={css.OldPriceCont}>
              <Text css={css.OldPriceText}>
                MRP <s>&#8377;{oldPrice}</s>
              </Text>
              <Text css={css.InclusiveTaxes}>Inclusive of All taxes</Text>
            </Box>

            {/* Delivery Details */}
            <Box css={css.DeliveryDetailsCont}>
              <Box css={css.DDCard}>
                <Image as={BsCashCoin} css={css.DDIconsCss} />
                <Text css={css.DDTextCss}>COD available</Text>
              </Box>
              <Box css={css.DDCard}>
                <Image as={FaExchangeAlt} css={css.DDIconsCss} />
                <Text css={css.DDTextCss}>
                  {id % 2 == 0 ? 10 : 7} Days Return and Exchange
                </Text>
              </Box>
              <Box css={css.DDCard}>
                <Image as={BsTruck} css={css.DDIconsCss} />
                <Text css={css.DDTextCss}>
                  Usually ships in {id % 2 == 0 ? 2 : 3} days
                </Text>
              </Box>
            </Box>

            {/* Customer Rating and Rewiews */}
            <Box css={css.RatingAndReviewsCont}>
              <Text css={css.CustReviewsHead}>Customer Reviews</Text>
              <Box css={css.RAndRCont}>
                <Text css={css.RatingCss}>{rating} / 5</Text>
                <Box css={css.StarsCont}> {renderStars()}</Box>
              </Box>
              <Text css={css.ReviewsCss}>Based on {review} ratings</Text>
            </Box>

            {/* Add To Cart Button */}
            <Box css={css.AddCartCont}>
              <Button onClick={handleAddToCart} css={css.AddCartBtn}>
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default SingleProductPage;
