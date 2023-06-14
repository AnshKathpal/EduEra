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
import { getUniversities } from "../redux/University/api";
import { AppAction } from "../redux/University/action";
import { GET_UNIVERSITY_SUCCESS } from "../redux/University/actionTypes";
import { UniversityCard } from "../Components/UniversityCard";

export const UniversitiesList = () => {
  const dispatch = useAppDispatch();
  const universities = useAppSelector(
    (store) => store.universitiesReducer.data
  );

  console.log(universities);

  const fetchData = async () => {
    try {
      const universities = await getUniversities();
      const action: AppAction = {
        type: "GET_UNIVERSITY_SUCCESS",
        payload: universities || [],
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box border="1px solid red" width="100%" height="80px"></Box>
      <Box border="1px solid blue" height="500px"></Box>

      <Grid border="1px solid red" gridTemplateColumns="repeat(3,1fr)" width="80%" margin="auto" gap={10} >

          {universities.length > 0 &&
            universities.map((item) => {
              return <UniversityCard key={item.id} {...item} />;
            })}
      </Grid>
    </>
  );
};
