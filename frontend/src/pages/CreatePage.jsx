import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";

import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  //createProduct the function that we are extracting
  const { createProduct } = useProductStore();

  const toast = useToast();

  //ig click sa product will call this function
  const handleAddProduct = async () => {
    //error from the product.js
    const { success, message } = await createProduct(newProduct);

    //destructure the values
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };
  return (
    <Container>
      <VStack spacing={8} size={"2x1"} textAlign={"center"} mb={8}>
        <Heading as={"h1"}>Create New Product</Heading>
      </VStack>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="full"
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          ></Input>

          <Input
            placeholder="Product Price"
            price="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          ></Input>

          <Input
            placeholder="Image URL"
            image="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          ></Input>
          <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
            Add Product
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreatePage;
