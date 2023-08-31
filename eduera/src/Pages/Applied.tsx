import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/store";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { addApplication } from "../redux/Programs/api";
import AppliedImg from "../Images/Applied.png"

import {
  Progress,
  ButtonGroup,
  Heading,
  GridItem,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Container,
  Stack,
  Flex,
  Box,
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
  Input,
} from "@chakra-ui/react";
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";

type AppliedParams = {
  id: string;
};

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

const initialState = {
  applicant_name: "",
  dob: "",
  gender: "",
  nationality: "",
  address: "",
  country: "",
  education: "",
  program: "",
};

export const Applied = () => {
  const { id } = useParams<AppliedParams>();
  console.log(id);

  const programs = useAppSelector((store) => store.programeReducer.data);
  console.log(programs);

  const selectedProgram = programs.find((applied) => applied.id === Number(id));
  console.log(selectedProgram, "selected");

  const [newData, setNewData] = useState<NewDataType>(initialState);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

    const { value, name } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {

    const { value, name } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addApplication(newData);
    setNewData(initialState)
    alert("Application Submitted")
  }

  // useEffect(() => {
  //   const parallax = () => {
  //     const scrolled = window.pageYOffset;
  //     const background = document.getElementById("parallax-background");
  //     if (background) {
  //       background.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
  //     }
  //   };

  //   window.addEventListener("scroll", parallax);
  //   return () => {
  //     window.removeEventListener("scroll", parallax);
  //   };
  // }, []);

  return (
    <>
      <Flex
      flexDirection="column"
        width="100%"
        height="90vh"
        justifyContent="center"
        gap={20}
        alignItems="center"
        backgroundImage={AppliedImg}
        backgroundSize="cover"
      >
        {selectedProgram && (
          <>
          <Box bg="white" width="70%" opacity={0.8} >
          <Text position="relative" color="rgb(18,57,78)" fontSize="5xl" >Great - we'll help you apply for your chosen program</Text>
          </Box> 
          <Box bg="white" width="40%" opacity={0.8} >
          <Text color="rgb(18,57,78)" fontSize="3xl" >{selectedProgram.programName} <br /> {selectedProgram.university}</Text>
          </Box>
          </>
        )}
      </Flex>
      {/* </Box> */}
      <Box>
        <Text fontSize="4xl" mt={4} >Fill the Application form</Text>
      </Box>
      <form style={{width : "70%", margin : " 5% auto"}} onSubmit={handleSubmit} >
        <FormControl isRequired >
          <FormLabel>1. Applicant's Name</FormLabel>
          <Input
            type="text"
            name="applicant_name"
            value={newData.applicant_name}
            onChange={handleChange}
          ></Input>
          <FormLabel>2. Date of Birth</FormLabel>
          <Input type="date" name="dob" value={newData.dob} onChange = {handleChange} ></Input>
          <FormLabel>3. Gender</FormLabel>
          {/* <Input type="select" name="gender" value={newData.gender} onChange = {handleChange} ></Input> */}
          <select style={{width : "100%", height : "40px", border : "1px solid rgb(203,214,224)", borderRadius:"5px"}} name="gender" onChange={handleChangeSelect} >
          <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <FormLabel>4. Nationality</FormLabel>
          <Input
            type="text"
            name="nationality"
            value={newData.nationality}
            onChange={handleChange}
          ></Input>
          <FormLabel>5. Permanent Address</FormLabel>
          <Input type="text" name="address" value={newData.address} onChange = {handleChange} ></Input>
          <FormLabel>6. Country</FormLabel>
          <Input type="string" name="country" value={newData.country} onChange = {handleChange}></Input>
          <FormLabel>7. Current/Most Recent Educational Institution:</FormLabel>
          <Input
            type="text"
            name="education"
            value={newData.education}
            onChange = {handleChange}
          ></Input>
          <FormLabel>8. Program of Interest</FormLabel>
          {selectedProgram && (
            <Input
            type="text"
            name="program"
            value={selectedProgram.programName}
            onChange = {handleChange}
          ></Input>
          )}
          <FormLabel>9. University Applied</FormLabel>
          {selectedProgram && (
            <Input
            type="text"
            name="program"
            value={selectedProgram.university}
            onChange = {handleChange}
          ></Input>
          )}
          
          <Button mt={5} type="submit" >Submit Application</Button>
        </FormControl>
      </form>
      <Footer />
    </>
  );
};
