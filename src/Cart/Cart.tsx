
import { Dispatch, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Link,
  Stack,
  Text,
  CSSReset,
  ChakraProvider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../Components/Footer";
import { AddToCart, getCartData } from "../Redux/carts/action";
import { SingleCartPage } from "../Components/SingleCartPage";
import { number } from "yargs";

import { idText } from "typescript";
import Billing from "./Billing";

const Cart = () => {
  const dispatch: any = useDispatch();

  const addProduct = useSelector((store: any) => store.cartReducer.cart);
const [product, setProduct]=useState(addProduct)
const [quantity, setquantity]=useState(1)
const [amt, setamt]=useState(0)
  const handleDecrease=(prev:number)=>{
setquantity((prev)=>prev-1)
  }
  const handleIncrease=(prev:number)=>{
    setquantity((prev)=>prev+1)
      }
  const handleDelete = (id: number) => {
    const upadatTodo = product.filter((el: any) => {
      if (id === el.id) {
        return false;
      } else{
        return true
      }
    });
    setProduct(upadatTodo)
  };
 const setprice=()=>{
  
 }

useEffect(()=>{
},[amt])
 

console.log(product)

  return (
    <ChakraProvider>
      <CSSReset />
      <Box bg="white">
        <Box w={{ base: "95%", md: "92%" }} m="auto">
          <NavLink to="/">
            <Box display="inline-block">
              <Flex
                mt="6"
                gap="2"
                color="#06c"
                align="center"
                justify="center"
                _hover={{ textDecor: "underline" }}
              >
                {/* <AiOutlineLeft boxSize='6' /> */}
                <Text fontSize="sm">Continue Shopping</Text>
              </Flex>
            </Box>
          </NavLink>

          <Heading
            borderBottom="1px solid grey"
            mt="8"
            pb="6"
            fontWeight={{ base: "normal", sm: "medium", lg: "normal" }}
            size={{ base: "lg", sm: "xl", lg: "2xl" }}
          >
            Shopping Cart
          </Heading>


          {product.length === 0 ? (

            <Heading
              fontWeight="normal"
              mt={{ base: "6", md: "8" }}
              size={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
            >
              Shopping Cart is Empty
            </Heading>
          ) : (
            <Flex
              mt={{ base: "6", md: "8" }}
              justify="flex-start"
              align={{ base: "center", xl: "flex-end" }}
              gap="2"
            >
              <Heading
                fontWeight="normal"
                size={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
              >
                Ship - Worldwide Express
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md", lg: "lg" }}
                color="blackAlpha.700"
              >
                (

                {`${product.length} ${
                  product.length > 1 ? "items" : "item"

                }`}
                )
              </Text>
            </Flex>
          )}

          <Stack
            align="flex-start"
            justify="flex-start"
            direction={{ base: "column", md: "row" }}
            borderBottom={{ base: "none", md: "10px solid" }}
            borderColor={{ base: "none", md: "blackAlpha.100" }}
            gap="8"
            my="6"
          >

            {product.length !== 0 && (
              <Box w="100%">
                {product.map((item: any) => (

            

                  <SingleCartPage
                    key={item.id + item.name}
                    {...item}
                    handleDelete={handleDelete}

                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                    quantity={quantity}
                    setquantity={setquantity}
               

                  />
                ))}
              </Box>
            )}


            {product.length === 0 && (

              <Box w={{ base: "100%", lg: "50%", xl: "100%" }}>
                <Stack
                  h={{ base: "200px", md: "450px" }}
                  border={{ base: "none", md: "10px solid" }}
                  borderColor={{ base: "none", md: "blackAlpha.100" }}
                  justify="center"
                  align="center"
                >
                  <NavLink to="/">
                    <Button
                      color="white"
                      px={{ base: "24", md: "20", lg: "24" }}
                      py={{ base: "0", md: "8" }}
                      fontSize={{ base: "md", md: "xl" }}
                      _focus={{ bg: "#2787e6" }}
                      _hover={{ bg: "#2787e6" }}
                      _active={{ bg: "#2787e6" }}
                      bg="#0060bf"
                    >
                      Continue Shopping
                    </Button>
                  </NavLink>
                </Stack>
              </Box>
            )}


            <Box w={{ base: "100%", lg: "50%" }}>
              <Box
                w="100%"
                mt="8"
                py="8"
                borderY={{ base: "none", md: "1px solid lightgray" }}

             
              >
         {/* <h1>{quantity * amt}</h1> */}
        

                <Box ml="4">
                  <Heading
                    size="md"
                    fontWeight="normal"
                    textTransform="capitalize"
                  >
                    We're here for you
                  </Heading>
                  <Text
                    mt="1"
                    fontWeight="normal"
                    fontSize="sm"
                    color="gray.600"
                  >
                    We want to remove the stress of buying online.
                  </Text>

                  <Stack
                    mt="2"
                    color="#06c"
                    fontSize="sm"
                    direction="column"
                    align="flex-start"
                    justify="flex-start"
                  >
                    <Link
                      _hover={{ textDecor: "none" }}
                      href="https://www.adorama.com/help/shippingAndDelivery"
                    >
                      Common questions about shipping
                    </Link>
                    <Link
                      _hover={{ textDecor: "none" }}
                      href="https://www.adorama.com/help/returnPolicy"
                    >
                      View our Return Policy
                    </Link>
                  </Stack>
                </Box>
              </Box>

              <Box w="100%" py={{ base: "6", md: "8" }}>
                <Box ml="4">
                  <Heading
                    size="md"
                    fontWeight="normal"
                    textTransform="capitalize"
                  >
                    Security 100% Guaranteed
                  </Heading>
                  <Text
                    mt="1"
                    fontWeight="normal"
                    fontSize="sm"
                    color="gray.600"
                  >
                    Your order is safe & secure guarded by state-of-the-art
                    technology.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Cart;

