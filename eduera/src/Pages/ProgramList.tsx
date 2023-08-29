import {
  Box,
  Button,
  Flex,
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
import { useAppDispatch, useAppSelector } from "../redux/store";
import { AppAction } from "../redux/Programs/action";
import { GET_PROGRAM_SUCCESS } from "../redux/Programs/actionTypes";
import { useLocation, useSearchParams } from "react-router-dom";
import { SidebarPrograms } from "../Components/SidebarPrograms";
import { getPrograms } from "../redux/Programs/api";
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

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
          search: searchParams.get("search"), // Add this line
          sortBy: searchParams.get("sortBy"), // Add this line
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

  useEffect(() => {
    const parallax = () => {
      const scrolled = window.pageYOffset;
      const background = document.getElementById("parallax-background");
      if (background) {
        background.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
      }
    };

    window.addEventListener("scroll", parallax);
    return () => {
      window.removeEventListener("scroll", parallax);
    };
  }, []);

  const filteredPrograms = programsList.filter(
    (programsList) =>
      (searchParams.has("country")
        ? programsList.country === searchParams.get("country")
        : true) &&
      (searchParams.has("programType")
        ? programsList.programType === searchParams.get("programType")
        : true) &&
      (searchParams.has("search")
        ? programsList.programName
            .toLowerCase()
            .includes(searchParams.get("search")?.toLowerCase() || "")
        : true)
  );
  return (
    <div style={{ backgroundColor: "rgb(244,245,247)" }}>
      <Box pos="relative" overflow="hidden">
        <Flex
          bg="url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600)"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={{ base: "40vh", lg: "80vh" }}
          id="parallax-background"
          gap={5}
        >
          <Box bg="white" width={{ base: "90%", lg: "70%" }} opacity={0.8}>
            <Text
              position="relative"
              color="rgb(18,57,78)"
              fontSize={{ base: "xl", lg: "7xl" }}
            >
              Find & apply for your ideal program
            </Text>
          </Box>

          <Text color="white" fontSize={{ base: "l", lg: "3xl" }}>
            Get a free 48 hour fast-track assessment (worth $185*) to maximize
            your chance of getting admitted
          </Text>
          <Button
            width={{ base: "50%", lg: "20%" }}
            bg="rgb(72,135,242)"
            mt={5}
          >
            How EduEra can Help
          </Button>
        </Flex>
      </Box>

      {/* <Box> */}
      <SidebarPrograms />

      <Box id="programBox" width="80%" margin=" auto">
        {filteredPrograms.length > 0 &&
          filteredPrograms.map((item) => {
            return <ProgramCard key={item.id} {...item} />;
          })}
      </Box>

      <Box pb={5} width="80%" margin="auto">
        <Text fontWeight="bold" fontSize="5xl">
          Why use EduEra?
        </Text>
        <Text mb={3} fontSize="xl">
          We maximise your chance of being admitted with our free, 48 hour
          fast-track assessment (worth $185*)
        </Text>
        <Flex direction={{base : "column", lg : "row"}} justifyContent="space-around"  alignItems="center">
          <Box p={4}>
            <img
              style={{ margin: "auto" }}
              src="https://images.studee.com/illustrations/illustration__spot--program-matching.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128"
              alt=""
            />
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text display = {{base : "none", lg : "inline"}} >
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
            <Text fontWeight="bold" >Find your ideal program</Text>
            <Text display = {{base : "none", lg : "inline"}}  >
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
            <Text display = {{base : "none", lg : "inline"}}  >
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
            <Text display = {{base : "none", lg : "inline"}}  >
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
