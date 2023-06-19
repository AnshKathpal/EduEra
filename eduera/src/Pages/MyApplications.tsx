import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/store";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { addApplication, getApplications,deleteProduct } from "../redux/Programs/api";
import ApplicationImg from "../Images/applications.png"

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
  
//   const initialState = {
//     applicant_name: "",
//     dob: "",
//     gender: "",
//     nationality: "",
//     address: "",
//     country: "",
//     education: "",
//     program: "",
//   };

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
            // getProducts(obj).then((res) => {
            //   console.log(res);
            //   setAllProducts([...res]);
            // });
      
            const newAllProducts = allProducts.filter((product) => product.id !== id);
            setAllProducts(newAllProducts);
      
      
      
      
          })
          .catch((error) => {
            console.error("Failed to delete product:", error);
          });
      };
      

  return (

    <>
    
    <Navbar />

    <Flex
      flexDirection="column"
        width="100%"
        height="90vh"
        justifyContent="center"
        gap={20}
        alignItems="center"
        backgroundImage={ApplicationImg}
        backgroundSize="cover"
        // id="parallax-background"
        // pos="absolute"
        // top="0"
        // left="0"
        // w="100%"
        // h="100%"
        // style={{ willChange: "transform" }}
      >
       <Box bg="white" width="70%" opacity={0.8} >
          <Text position="relative" color="rgb(18,57,78)" fontSize="5xl" >Route to the Bright Future</Text>
          </Box>
          <Box bg="white" width="40%" opacity={0.8} >
          <Text color="rgb(18,57,78)" fontSize="3xl" >Your Applications</Text>
          </Box>
      </Flex>



    <TableContainer width = "80%" margin="10% auto" >
  <Table variant='simple'>
    <Thead>
      <Tr borderBottom="2px solid black" >
        <Th fontSize="l" >Application ID</Th>
        <Th fontSize="l">Applicant Name</Th>
        <Th fontSize="l">Gender</Th>
        <Th fontSize="l">Address</Th>
        <Th fontSize="l">Country</Th>
        <Th fontSize="l">Applied For</Th>
      </Tr>
    </Thead >

{allProducts && allProducts.map((apps)=>(
    <Tbody >
      <Tr>
        <Td>#{Math.floor(Math.random() * 10000) + 1}</Td>
        <Td>{apps.applicant_name}</Td>
        <Td>{apps.gender}</Td>
        <Td>{apps.address}</Td>
        <Td>{apps.country}</Td>
        <Td>{apps.program}</Td>
        <Button mt={3} onClick={()=>handelDelete(apps.id!)} >Cancel Application</Button>
      </Tr>
    </Tbody>
))}
  </Table>
</TableContainer>

<Footer />
</>
  )
}
