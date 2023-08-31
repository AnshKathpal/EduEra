import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/store";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  addApplication,
  getApplications,
  deleteProduct,
} from "../redux/Programs/api";
import ApplicationImg from "../Images/applications.png";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  HStack,
  TagLabel,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";

export interface NewDataType {
  applicant_name: string;
  dob: string;
  gender: string;
  nationality: string;
  address: string;
  country: string;
  education: string;
  program: string;
  id?: number;
}

export const MyApplications = () => {
  const [allProducts, setAllProducts] = useState<NewDataType[]>([]);

  useEffect(() => {
    getApplications().then((res) => {
      console.log(res);
      setAllProducts([...res]);
    });
  }, []);

  console.log(allProducts);

  const handelDelete = (id: number) => {
    deleteProduct(id)
      .then(() => {
        const newAllProducts = allProducts.filter(
          (product) => product.id !== id
        );
        setAllProducts(newAllProducts);
      })
      .catch((error) => {
        console.error("Failed to delete product:", error);
      });
  };

  return (
    <>
      <Flex
        flexDirection="column"
        width="100%"
        height={{ base: "40vh", lg: "80vh" }}
        justifyContent={{ base: "flex-end", lg: "center" }}
        pb={{ base: 10, lg: 0 }}
        gap={{ base: 5, lg: 10 }}
        alignItems="center"
        backgroundImage={ApplicationImg}
        backgroundSize="cover"
      >
        <Box bg="white" width={{ base: "90%", lg: "70%" }} opacity={0.8}>
          <Text
            position="relative"
            color="rgb(18,57,78)"
            fontSize={{ base: "xl", lg: "7xl" }}
          >
            Route to the Bright Future
          </Text>
        </Box>
        <Box bg="white" width={{ base: "90%", lg: "40%" }} opacity={0.8}>
          <Text color="rgb(18,57,78)" fontSize="3xl">
            Your Applications
          </Text>
        </Box>
      </Flex>

      <TableContainer width={{base : "90%" , lg : "80%"}} margin="10% auto">
        <Table variant="simple">
          <Thead>
            <Tr borderBottom="2px solid black">
              <Th fontSize={{base : "sm" , lg : "lg"}}>Application ID</Th>
              <Th fontSize={{base : "sm" , lg : "lg"}}>Applicant Name</Th>
              <Th fontSize={{base : "sm" , lg : "lg"}}>Gender</Th>
              <Th fontSize={{base : "sm" , lg : "lg"}}>Address</Th>
              <Th fontSize={{base : "sm" , lg : "lg"}}>Country</Th>
              <Th fontSize={{base : "sm" , lg : "lg"}}>Applied For</Th>
            </Tr>
          </Thead>

          {allProducts &&
            allProducts.map((apps) => (
              <Tbody>
                <Tr>
                  <Td fontSize={{base : "sm" , lg : "16px"}} >#{Math.floor(Math.random() * 10000) + 1}</Td>
                  <Td fontSize={{base : "sm" , lg : "16px"}} >{apps.applicant_name}</Td>
                  <Td fontSize={{base : "sm" , lg : "16px"}}>{apps.gender}</Td>
                  <Td fontSize={{base : "sm" , lg : "16px"}}>{apps.address}</Td>
                  <Td fontSize={{base : "sm" , lg : "16px"}}>{apps.country}</Td>
                  <Td fontSize={{base : "sm" , lg : "16px"}}>{apps.program}</Td>
                  <Button fontSize={{base : "sm" , lg : "16px"}} mt={3} onClick={() => handelDelete(apps.id!)}>
                    Cancel Application
                  </Button>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>

      <Footer />
    </>
  );
};
