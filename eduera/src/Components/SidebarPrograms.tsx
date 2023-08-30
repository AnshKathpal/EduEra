import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import * as types from "../Constraints/types";
import { useState, useEffect } from "react";
import { useSearchParams,useNavigate } from "react-router-dom";
// import { getUniversities } from "../redux/University/api";
import { getPrograms } from "../redux/Programs/api";

import { Multiselect } from "multiselect-react-dropdown"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const SidebarPrograms = () => {

  const navigate = useNavigate();


  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountryValues = searchParams.getAll("country");
  const initialPlaceValues = searchParams.getAll("programName");
  let initialOrderValues = searchParams.get("order");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [sortBy, setSortBy] = useState<string>(searchParams.get("sortBy") || "");


  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
  setSearchQuery(value);
  const params = new URLSearchParams(searchParams);
  params.set("search", value);
  navigate(`?${params.toString()}`);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", value);
    navigate(`?${params.toString()}`);
  };
  
  


  const [countryValues, setCountryValues] = useState<string[]>(
    initialCountryValues || []
  );
  const [programValues, setProgramValues] = useState<string[]>(
    initialPlaceValues || []
  );

  const [order, setOrder] = useState<string>(
    initialOrderValues || ""
    
  );

  const handleCountryValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setCountryValues(selectedValues);

    const params = new URLSearchParams(searchParams);
  params.delete("country");
  selectedValues.forEach((value) => {
    params.append("country", value);
  });
  navigate(`?${params.toString()}`);
  };



  const handleprogramValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setProgramValues(selectedValues);

    const params = new URLSearchParams(searchParams);
  params.delete("programType");
  selectedValues.forEach((value) => {
    params.append("programType", value);
  });
  navigate(`?${params.toString()}`);

  };


  useEffect(() => {
    let params: { country?: string[] } = {};
    if (countryValues.length) params.country = countryValues;
    setSearchParams(params);
  }, [countryValues]);

  useEffect(() => {
    let params: { programType?: string[] } = {};
    if (programValues.length) params.programType = programValues;
    setSearchParams(params);
  }, [programValues]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  useEffect(() => {
  let params: { country?: string[]; programType?: string[]; sortBy?: string } = {};
  if (countryValues.length) params.country = countryValues;
  setSearchParams(params);
}, [countryValues, sortBy]);


  return (

    <>

<Box p={{base : "2" , lg : "5"}}  boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" backgroundColor="white" width={{base : "90%" , lg : "80%"}} margin="2% auto">
     

<Flex justifyContent="space-between" >
<Button onClick={onOpen}>Filter</Button>

<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent maxW={{base : "90%" , lg : "500px"}} border="1px solid blue" >
    <ModalHeader>Filters</ModalHeader>
    <ModalCloseButton />
    <ModalBody >

<Flex direction={{base : "column" , lg : "row"}} gap = {{base : "5" , lg : "0"}} >
<select value={countryValues} onChange={handleCountryValues}>
        <option value="">Select Country</option>
        <option value="England">England</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
      </select>

      <select value={programValues} onChange={handleprogramValues}>
        <option value="">Select Program Type</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
      </select>


      <select>
        <option value="">University Type</option>
        <option value="government">Government</option>
        <option value="private">Private</option>
      </select>
      

</Flex>

  

    </ModalBody>
    <ModalFooter>
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

<input style ={{border : "1px solid gray" , width : "50%", textAlign : "center"} } placeholder="Search Programs" value={searchQuery}
  onChange={handleSearchQueryChange} />
    

<select>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="fees">Fees</option>
      </select>
    

</Flex>

    </Box>

    </>
  );
};
