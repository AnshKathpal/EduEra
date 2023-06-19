import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/store";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { addApplication } from "../redux/Programs/api";

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

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addApplication(newData);
  }

  return (
    <>
    <Navbar />
      <Flex
        border="1px solid red"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="center"
        backgroundImage="linear-gradient(to bottom, #898a88, #a4a6a5, #c1c3c3, #e0e1e1, #ffffff)"
      >
        {selectedProgram && (
          <>
          <Text>Great - we'll help you apply for your chosen program</Text>
          <Box>
          <Text>{selectedProgram.programName}</Text>
          </Box>
          </>
        )}
      </Flex>
      <Box>
        <Text fontSize="4xl" >Fill the Application form</Text>
      </Box>
      <form style={{width : "70%", margin : " 5% auto"}} onSubmit={handleSubmit} >
        <FormControl isRequired >
          <FormLabel>1. Applicant's Name</FormLabel>
          <Input
            type="string"
            name="applicant_name"
            value={newData.applicant_name}
            onChange={handleChange}
          ></Input>
          <FormLabel>2. Date of Birth</FormLabel>
          <Input type="date" name="dob" value={newData.dob} onChange = {handleChange} ></Input>
          <FormLabel>3. Gender</FormLabel>
          <Input type="string" name="gender" value={newData.gender} onChange = {handleChange} ></Input>
          <FormLabel>4. Nationality</FormLabel>
          <Input
            type="string"
            name="nationality"
            value={newData.nationality}
            onChange={handleChange}
          ></Input>
          <FormLabel>5. Permanent Address</FormLabel>
          <Input type="string" name="address" value={newData.address} onChange = {handleChange} ></Input>
          <FormLabel>6. Country</FormLabel>
          <Input type="string" name="country" value={newData.country} onChange = {handleChange}></Input>
          <FormLabel>7. Current/Most Recent Educational Institution:</FormLabel>
          <Input
            type="string"
            name="education"
            value={newData.education}
            onChange = {handleChange}
          ></Input>
          <FormLabel>8. Program of Interest</FormLabel>
          {selectedProgram && (
            <Input
            type="string"
            name="program"
            value={selectedProgram.programName}
            onChange = {handleChange}
          ></Input>
          )}
          
          <Button type="submit" >Submit</Button>
        </FormControl>
      </form>
      <Footer />
    </>
  );
};
