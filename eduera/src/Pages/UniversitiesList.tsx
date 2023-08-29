import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Flex,
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
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import UniversityImg from "../Images/UniversitiesImg.jpg"

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
          search: searchParams.get("search"), // Add this line
          sortBy: searchParams.get("sortBy"), // Add this line
        },
      };

      const universities = await getUniversities(getUniversityParams);
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
        : true) &&
        (searchParams.has("search")
      ? university.name
          .toLowerCase()
          .includes(searchParams.get("search")?.toLowerCase() || "")
      : true)
  );


  return (
    <div style = {{backgroundColor :"rgb(244,245,247)"}} >

      {/* <Navbar /> */}

      <Box pos="relative"
      overflow="hidden" height="80vh">
      <Flex
        backgroundImage={UniversityImg}
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width = "100%"
        height= "100%"
        id="parallax-background"
        gap={5}
      >
        <Box bg="white" width="70%" opacity={0.8} >
        <Text position="relative" color="rgb(18,57,78)" fontSize="7xl">
            Find & apply for your ideal University
          </Text>
        </Box>
          <Box bg="white" opacity = {0.8} >
          <Text position="relative" color="rgb(18,57,78)" fontSize="3xl" >
          Get a free 48 hour fast-track assessment (worth $185*) to maximize
          your chance of getting admitted
        </Text>
          </Box>
        
        <Button width="20%" bg="rgb(72,135,242)" mt={5}>How EduEra can Help</Button>
      </Flex>
      </Box>
      {/* <Box> */}
        <Sidebar />
      {/* </Box> */}

      <Grid gridTemplateColumns="repeat(3,1fr)" width="80%" margin="auto" gap={10} >

          {filteredUniversities.length > 0 &&
            filteredUniversities.map((item) => {
              return <UniversityCard key={item.id} {...item} />;
            })}
      </Grid>

      <Box pb={5} width="80%" margin="auto">
        <Text fontWeight="bold" fontSize="5xl">
          Why use EduEra?
        </Text>
        <Text mb={3} fontSize="xl">
          We maximise your chance of being admitted with our free, 48 hour
          fast-track assessment (worth $185*)
        </Text>
        <Flex justifyContent="space-around" alignItems="center">
          <Box p={4}>
            <img
              style={{ margin: "auto" }}
              src="https://images.studee.com/illustrations/illustration__spot--program-matching.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128"
              alt=""
            />
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text>
              Filter 10,000s of programs down to a shortlist perfect for you,
              where you have a strong chance of getting admitted
            </Text>
          </Box>
          <Box p={4}>
            <img
              style={{ margin: "auto" }}
              src="https://images.studee.com/illustrations/illustration__spot--save-details.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128"
              alt=""
            />
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text>
              Filter 10,000s of programs down to a shortlist perfect for you,
              where you have a strong chance of getting admitted
            </Text>
          </Box>
          <Box p={4}>
            <img
              style={{ margin: "auto" }}
              src="https://images.studee.com/illustrations/illustration__spot--blended-learning.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128"
              alt=""
            />
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text>
              Filter 10,000s of programs down to a shortlist perfect for you,
              where you have a strong chance of getting admitted
            </Text>
          </Box>
          <Box p={4}>
            <img
              style={{ margin: "auto" }}
              src="https://images.studee.com/illustrations/illustration__spot--advice-center.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128"
              alt=""
            />
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text>
              Filter 10,000s of programs down to a shortlist perfect for you,
              where you have a strong chance of getting admitted
            </Text>
          </Box>
        </Flex>

        <Text
          color="rgb(74,152,120)"
          bg="rgb(243,248,246)"
          margin="auto"
          width="80%"
          mt={5}
        >
          Carbon compensation - We'll plant trees in your name to compensate for
          the carbon generated by all your flights to and from university.
        </Text>
        <Text bg="rgb(247,248,249)" margin="auto" width="80%" mt={5}>
          All our services are 100% free as we're funded by universities. You
          pay deposits & tuition fees directly to the university.
        </Text>
        <Text mt={5}>
          * Price based on similar application assessment services from other
          providers
        </Text>
      </Box>

      <Footer />
    </div>
  );
};
