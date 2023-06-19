import React from 'react'
import { useState, useEffect } from "react";
import AdminSidebar from '../../Components/AdminComponents/adminSidebar'
import { styled } from 'styled-components'
import { Chart } from "react-google-charts";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addApplication, getApplications,deleteProduct } from "../../redux/Programs/api";
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

interface UserData {
  students: number;
  country:string
}

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

export const AdminAnalitytics = () => {

  const [allProducts, setAllProducts] = useState<NewDataType[]>([]);

  useEffect(() => {
    getApplications().then((res) => {
      console.log(res);
      setAllProducts([...res]);
    });
  }, []);

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


  const dispatch = useDispatch();
  const universities = useAppSelector((store) => store.universitiesReducer.data);
console.log(universities)
  const userata: UserData[] = universities.map((university) => ({
    
    students: university.students,
    country: university.country,
  }));
  const expectedData: (string | number)[][] = [
    ["Country", "Popularity"],
    ...userata.map((data) => [data.country, data.students]),
  ];
  console.log(userata)
  return (
    <Div>
      <Wrapper>
      <AdminSidebar/>
      </Wrapper>
      
<Flex flexDirection="column" >
<Box>
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




</Box>

<Box>
  
<ChartWrapper>
      <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = expectedData[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={expectedData}
      options={{
        colorAxis: {
          colors: ['yellow', 'orange', 'red'], // Set custom colors for the chart
        },
      }}
    />

      </ChartWrapper>

  </Box>  


</Flex>
  
      
      
    </Div>
  )
}
const Div=styled.div`
display:flex
`
const ChartWrapper=styled.div`
padding:40px
`
const Wrapper=styled.div`
width:25%

`
