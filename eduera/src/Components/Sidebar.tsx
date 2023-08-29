import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import * as types from "../Constraints/types";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getUniversities } from "../redux/University/api";

// import { Multiselect } from "multiselect-react-dropdown"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const Sidebar = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountryValues = searchParams.getAll("country");
  const initialPlaceValues = searchParams.getAll("place");
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
  const [placeValues, setPlaceValues] = useState<string[]>(
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

  const handlePlaceValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setPlaceValues(selectedValues);

    const params = new URLSearchParams(searchParams);
    params.delete("place");
    selectedValues.forEach((value) => {
      params.append("place", value);
    });
    navigate(`?${params.toString()}`);

  };

  useEffect(() => {
    let params: { country?: string[] } = {};
    if (countryValues.length) params.country = countryValues;
    setSearchParams(params);
  }, [countryValues]);

  useEffect(() => {
    let params: { place?: string[] } = {};
    if (placeValues.length) params.place = placeValues;
    setSearchParams(params);
  }, [placeValues]);

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

<Box p={5} boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" bg="white" width="80%" margin="2% auto">
     
<Flex justifyContent="space-between" >
<Button onClick={onOpen}>Filter</Button>

<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Filters</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

    <select value={countryValues} onChange={handleCountryValues}>
        <option value="">Select Country</option>
        <option value="England">England</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Japan">Japan</option>
      </select>

      <select value={placeValues} onChange={handlePlaceValues}>
        <option value="">Select City</option>
        <option value="Oxford">Oxford</option>
        <option value="Cambridge">Cambridge</option>
        <option value="Pasadena">Pasadena</option>
      </select>


      <select>
        <option value="">University Type</option>
        <option value="government">Government</option>
        <option value="private">Private</option>
      </select>
      


    </ModalBody>
    <ModalFooter>
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

<input style ={{border : "1px solid gray" , width : "30%", textAlign : "center"} } placeholder="Search Universities"   value={searchQuery}
  onChange={handleSearchQueryChange}
   />
    

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
