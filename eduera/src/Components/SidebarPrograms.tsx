import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import * as types from "../Constraints/types";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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


  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCountryValues = searchParams.getAll("country");
  const initialPlaceValues = searchParams.getAll("programName");
  const [countryValues, setCountryValues] = useState<string[]>(
    initialCountryValues || []
  );
  const [programValues, setProgramValues] = useState<string[]>(
    initialPlaceValues || []
  );

  const handleCountryValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setCountryValues(selectedValues);
  };

  const handleprogramValues = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setProgramValues(selectedValues);
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

  return (

    <>

<Box p={5} border="1px solid red" width="80%" margin="2% auto">
     
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
      


    </ModalBody>
    <ModalFooter>
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

<input placeholder="Search Universities" />
    

<Button>
  Sort
</Button>

    

</Flex>

    </Box>

    </>
  );
};
