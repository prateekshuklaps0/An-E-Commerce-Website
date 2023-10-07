import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Footer } from "../Components/Footer";

function AddressPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setAddress("");
    setCity("");
    setState("");
    setZipCode("");
    setErrors({});
    alert("Address submitted successfully!");
  };

  return (
    <ChakraProvider>
      <Box maxW="sm" mx="auto" mt={10} p={4}>
        <Heading textAlign="center" mb={6}>
          Billing Address
        </Heading>

        <form onSubmit={handleFormSubmit}>
          <Stack spacing={4}>
            <FormControl id="firstName">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormErrorMessage>errors.firstName</FormErrorMessage>
            </FormControl>

            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormErrorMessage>errors.lastName</FormErrorMessage>
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <FormErrorMessage>errors.address</FormErrorMessage>
            </FormControl>

            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <FormErrorMessage>errors.city</FormErrorMessage>
            </FormControl>

            <FormControl id="state">
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                placeholder="Enter your state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <FormErrorMessage>errors.state</FormErrorMessage>
            </FormControl>

            <FormControl id="zipCode">
              <FormLabel>Zip Code</FormLabel>
              <Input
                type="text"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <FormErrorMessage>errors.zipCode</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              isLoading={false}
            >
              Submit Address
            </Button>
          </Stack>
        </form>
      </Box>

      <Footer />
    </ChakraProvider>
  );
}

export default AddressPage;
