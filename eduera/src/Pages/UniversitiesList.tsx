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
import { University } from "../Constraints/types";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getUniversities, postUniversities } from "../redux/University/api";
import { AppAction } from "../redux/University/action";
import { GET_UNIVERSITY_SUCCESS } from "../redux/University/actionTypes";
import { UniversityCard } from "../Components/UniversityCard";
import { newUniversity } from "../Constraints/types";
import { Sidebar } from "../Components/Sidebar";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar"

export const UniversitiesList = () => {
  const dispatch = useAppDispatch();
  const universities = useAppSelector(
    (store) => store.universitiesReducer.data
  );
  const [searchParams] = useSearchParams();
  const location = useLocation()

  console.log(universities);

  const fetchData = async () => {
    try {

      const getUniversityParams = {
        params: {
          country: searchParams.getAll("country"),
          place: searchParams.getAll("place"),
        },
      };

      const universitiesList = await getUniversities(getUniversityParams);
      const action: AppAction = {
        type: "GET_UNIVERSITY_SUCCESS",
        payload: universitiesList || [],
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (universities.length === 0 || location) {
      fetchData();
    }
  }, [location.search]);

  const filteredUniversities = universities.filter(
    (university) =>
      (searchParams.has("country")
        ? university.country === searchParams.get("country")
        : true) &&
      (searchParams.has("place")
        ? university.place === searchParams.get("place")
        : true)
  );


  return (
    <div style = {{backgroundColor :"rgb(244,245,247)"}} >

      {/* <Box border="1px solid red" width="100%" height="80px"></Box> */}


<Navbar />

      <Box border="1px solid blue" height="500px"></Box>
      {/* <Box> */}
        <Sidebar />
      {/* </Box> */}

      <Grid gridTemplateColumns="repeat(3,1fr)" width="80%" margin="auto" gap={10} >

          {filteredUniversities.length > 0 &&
            filteredUniversities.map((item) => {
              return <UniversityCard key={item.id} {...item} />;
            })}
      </Grid>
    </div>
  );
};
