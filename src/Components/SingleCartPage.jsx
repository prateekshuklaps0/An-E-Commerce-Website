import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Hide,
  IconButton,
  Image,
  Text,
  Tooltip,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheckCircle, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteItem } from "../Redux/carts/action";
import {useState} from "react"
export const SingleCartPage = ({ img, id, category, subCate, name, brand, newPrice, rating, review, handleDelete,handleDecrease, handleIncrease, setquantity, quantity}) => {

  const dispatch = useDispatch();
  
  return (
    <Box
      w={{ base: "100%", lg: "50%", xl: "100%" }}
      borderX={{ base: "none", md: "10px solid" }}
      borderTop={{ base: "none", md: "10px solid" }}
      borderColor={{ base: "none", md: "blackAlpha.100" }}
      p="8"
      pt="0"
      pr="0"
    >
      <Flex justify="space-between" align="flex-start">
        <Flex justify="left" align="flex-start" gap="8" mt="8" mr="8">
          <Image w={{ base: "30%", sm: "20%" }} src={img} alt={"item"} />

          <Box w="60%">
            <NavLink to={`/products/${id}`}>
              <Heading
                w="100%"
                lineHeight="6"
                size="md"
                color="#06c"
                fontWeight="normal"
                noOfLines={2}
                textOverflow="ellipsis"
              >
                {name}{" "}
              </Heading>
            </NavLink>
            <Text lineHeight="taller" fontSize={{ base: "2xs", sm: "xs" }}>
              SKU: {id}
            </Text>
            <Text lineHeight="taller" fontSize={{ base: "2xs", sm: "xs" }}>
              Rating: {rating}
            </Text>
            <Text lineHeight="taller" fontSize={{ base: "2xs", sm: "xs" }}>
              Brand: {brand}
            </Text>
            <Flex justify="left" align="center" gap="1" mt="4" color="green">
              <AiOutlineCheckCircle style={{ fontSize: "20px" }} />
              <Text fontSize="sm" letterSpacing="wide">
                In Stock
              </Text>
            </Flex>
          </Box>

          <Hide below="md">
            <Text>Rs. {newPrice}</Text>
          </Hide>
        </Flex>

        <Box textAlign="right" p="2" color="blue.300">
          <Tooltip
            label="Remove this item"
            bg="blackAlpha.700"
            fontWeight="thin"
            placement="right-end"
            openDelay={500}
          >
            <Box>
              <CloseButton
                onClick={() => handleDelete(id)}
                fontSize="md"
                bg="none"
                _hover={{
                  transform: "rotateY(0deg) rotate(180deg)",
                  transition: "transform 0.3s",
                }}
              />
            </Box>
          </Tooltip>
        </Box>
      </Flex>

      <Flex justify="flex-end" mt="4">
        <ButtonGroup size="sm" isAttached>
          <IconButton
            icon={<AiOutlineMinus />}
            onClick={() => handleDecrease(id)}
            bg="none"
            _hover={{ bg: "none" }}
            isDisabled={quantity <= 1}
          />
          <Button>{quantity}</Button>
          <IconButton
            icon={<AiOutlinePlus />}
            onClick={() => handleIncrease(id)}
            bg="none"
            _hover={{ bg: "none" }}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

