// import { Box, Flex } from "@chakra-ui/react";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar"
import { useAppSelector } from "../redux/store";

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
  } from '@chakra-ui/react';
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";

export const ProgramDetails = () => {

    const {id} = useParams();
    console.log(id);

    const programs = useAppSelector((store) => store.programeReducer.data)
    console.log(programs)



    // const fetchData = async () => {
    //     let res = await fetch(`https://645d4803e01ac61058a174ca.mockapi.io/treatments/${id}`);
    
    
    //     console.log("response", res)
    
    //     let data = await res.json();
    //     // let fetchedData = await data.products;
    //     setData(data);
    //     console.log("data",data);
    //   };
    
    //   useEffect(() => {
    //     fetchData(id);
    //   }, [id]);


  return (
    <div>
        <Navbar />
        <Flex border= "1px solid red" width="100%" height = "80vh" justifyContent="center" alignItems="center" >
    <Box border="1px solid blue" width="40%" height="70%" >
        {/* {programs.map((item) => (
             <Card key = {item.id} {...item} / >
        )} */}
    </Box>
            <Box border="1px solid blue" width="40%" height="40%" ></Box>

 </Flex>

        

    </div>
  )
}


// const Card = ({ program }) => {
//     return (
//       <Container maxW="xl" centerContent p={6}>
//         <Box
//           maxW="sm"
//           borderWidth="1px"
//           borderRadius="lg"
//           overflow="hidden"
//           boxShadow="lg"
//         >
//           <Image src={program.image} alt={program.name} />
  
//           <Box p="6">
//             <Stack spacing={1}>
//               <Heading fontSize="xl" textAlign="center">
//                 {program.name}
//               </Heading>
//               <Text>{program.description}</Text>
//             </Stack>
//           </Box>
//         </Box>
//       </Container>
//     );
//   };
