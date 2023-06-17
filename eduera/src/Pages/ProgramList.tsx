import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { University } from "../Constraints/types";
import { useAppDispatch, useAppSelector } from "../redux/store";
// import { getUniversities, postUniversities } from "../redux/University/api";
import { AppAction } from "../redux/Programs/action";
// import { GET_UNIVERSITY_SUCCESS } from "../redux/University/actionTypes";
import { GET_PROGRAM_SUCCESS } from "../redux/Programs/actionTypes";
// import { UniversityCard } from "../Components/UniversityCard";
// import { newUniversity } from "../Constraints/types";
// import { Sidebar } from "../Components/Sidebar";
import { useLocation, useSearchParams } from "react-router-dom";
import { SidebarPrograms } from "../Components/SidebarPrograms";
import { getPrograms } from "../redux/Programs/api";
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";
import Navbar from "../Components/Navbar";

export const ProgramList = () => {
  const dispatch = useAppDispatch();
  const programsList = useAppSelector<Programs[]>(
    (store) => store.programeReducer.data
  );
  const [searchParams] = useSearchParams();
  const location = useLocation();

  console.log(programsList);

  const fetchData = async () => {
    try {
      const getProgramParams = {
        params: {
          country: searchParams.getAll("country"),
          programType: searchParams.getAll("programType"),
        },
      };

      const programsCheck = await getPrograms(getProgramParams);
      const action: AppAction = {
        type: "GET_PROGRAM_SUCCESS",
        payload: programsCheck || [],
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (programsList.length === 0 || location) {
      fetchData();
    }
  }, [location.search]);

  const filteredPrograms = programsList.filter(
    (programsList) =>
      (searchParams.has("country")
        ? programsList.country === searchParams.get("country")
        : true) &&
      (searchParams.has("programType")
        ? programsList.programType === searchParams.get("programType")
        : true)
  );

  return (
    <div style={{ backgroundColor: "rgb(244,245,247)" }}>
      <Navbar />
      <Box border="1px solid blue" height="500px"></Box>
      {/* <Box> */}
      <SidebarPrograms />

      <Box width="80%" margin=" auto">
        {filteredPrograms.length > 0 &&
          filteredPrograms.map((item) => {
            return <ProgramCard key={item.id} {...item} />;
          })}
      </Box>
    </div>
  );
};
