// import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../redux/store";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
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
} from "@chakra-ui/react";
import { Programs } from "../Constraints/types";
import { ProgramCard } from "../Components/ProgramCard";

type ProgramParams = {
  id: string;
};

export const ProgramDetails = () => {
  const { id } = useParams<ProgramParams>();
  console.log(id);

  const programs = useAppSelector((store) => store.programeReducer.data);
  console.log(programs);

  const selectedProgram = programs.find((program) => program.id === Number(id));
  console.log(selectedProgram, "selected");

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

  return (
    <div>
      {/* <Navbar /> */}
      <Box pos="relative" overflow="hidden" width="100%" height="90vh">
        <Flex
          width="100%"
          direction={{base : "column" , lg : "row"}}
          height={{ base: "90vh", lg: "90vh" }}
          justifyContent={{base : "flex-end" , lg : "center"}}
          alignItems="center"
          bg="url(https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600)"
          id="parallax-background"
          backgroundSize="cover"
          pos="absolute"
          top="0"
          left="0"
        >
          <Flex
            p={{base : 0, lg : 10}}
            flexDirection="column"
            gap={{base : 3, lg : 10}}
            justifyContent="center"
            alignItems="center"
            width={{base : "95%" , lg : "40%"}}
            height={{base : "50%" , lg : "70%"}}
          >
            {selectedProgram && (
              <>
                <Box bg="white" opacity={0.6} width="100%">
                  <Text color="rgb(18,57,78)" fontSize={{base : "l" , lg : "4xl"}}>
                    Apply for {selectedProgram.programName} -{" "}
                    {selectedProgram.degree}
                  </Text>
                </Box>
                <h1>
                  Get a free 48 hour fast-track assessment (worth $185*) to
                  maximize your chance of getting admitted
                </h1>
                <Stack direction={{base : "column" , lg : "row"}} >
                  <Button>Ready to apply</Button>
                  <Button>Boost Your Addmission Chances</Button>
                </Stack>
              </>
            )}
          </Flex>
          <Box
            p={{base : 1 , lg : 10}}
            boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            width={{base : "90%" , lg : "30%"}}
            height={{base : "40%" , lg : "60%"}}
            backgroundColor="white"
          >
            {selectedProgram && (
              <>
                <Text fontSize="3xl">Program Facts</Text>
                <Text fontSize="xl" fontWeight="bold" color="rgb(72,135,242)">
                  {selectedProgram.university}
                </Text>
                <Text fontWeight="bold">{selectedProgram.country}</Text>
                <Flex mt={5} gap={7} flexDirection="column">
                  <Flex gap={10} justifyContent="space-evenly">
                    <Box bgColor="rgb(244,245,247)" width="40%">
                      Program type <br /> <b>{selectedProgram.programType}</b>{" "}
                    </Box>
                    <Box bgColor="rgb(244,245,247)" width="40%">
                      Duration <br /> <b>{selectedProgram.duration}</b>
                    </Box>
                  </Flex>

                  <Flex gap={10} justifyContent="space-evenly">
                    <Box bgColor="rgb(244,245,247)" width="40%">
                      Annual Tution Fees <br /> <b>{selectedProgram.fees}</b>
                    </Box>
                    <Box bgColor="rgb(244,245,247)" width="40%">
                      Start Date <br /> <b>{selectedProgram.programType}</b>
                    </Box>
                  </Flex>
                  <Box bgColor="rgb(244,245,247)" margin="auto" width="92%">
                    Start Date <br /> <b>{selectedProgram.startMonth}</b>
                  </Box>
                </Flex>
              </>
            )}
          </Box>
        </Flex>
      </Box>
      <Box pb={5} width="80%" margin="auto">
        <Text fontWeight="bold" fontSize="5xl">
          Why use EduEra?
        </Text>
        <Text mb={3} fontSize="xl">
          We maximise your chance of being admitted with our free, 48 hour
          fast-track assessment (worth $185*)
        </Text>
        <Flex justifyContent="space-around" alignItems="center" direction={{base : "column", lg : "row"}}>
          <Box p={4} >
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
            <Text fontWeight="bold">Find your ideal program</Text>
            <Text display = {{base : "none", lg : "inline"}} >
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
            <Text display = {{base : "none", lg : "inline"}} >
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
            <Text display = {{base : "none", lg : "inline"}} >
              Filter 10,000s of programs down to a shortlist perfect for you,
              where you have a strong chance of getting admitted
            </Text>
          </Box>
        </Flex>

        <Text
          color="rgb(74,152,120)"
          bg="rgb(243,248,246)"
          margin="auto"
          width={{base : "95%" , lg : "80%"}}
          mt={5}
        >
          Carbon compensation - We'll plant trees in your name to compensate for
          the carbon generated by all your flights to and from university.
        </Text>
        <Text bg="rgb(247,248,249)" margin="auto" width={{base : "95%" , lg : "80%"}}mt={5}>
          All our services are 100% free as we're funded by universities. You
          pay deposits & tuition fees directly to the university.
        </Text>
        <Text mt={5}>
          * Price based on similar application assessment services from other
          providers
        </Text>
        <Link to="/programs">
          <Button mt={5}>Search More Programs</Button>
        </Link>
      </Box>


      <Flex gap={30} width="80%" align={"center"} direction={{base : "column" , lg : "row"}} margin="3% auto" height="400px">
        <Box width="80%">
          <img
            src="https://images.studee.com/images/content/content__trees-for-degrees-badge.svg"
            alt=""
          />
        </Box>
        <Flex
          gap="5%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text fontWeight="bolder" fontSize={{base : "xl" , lg : "6xl"}}>
            Trees for degrees - The one million trees project
          </Text>
          <Text>
            When you enroll through us, you become part of a new movement to
            help reduce the environmental impact of international student
            flights. We’ll donate to Plant-for-the-Planet, who plant trees on
            your behalf. These trees contribute towards absorbing the CO2
            released into our atmosphere, which helps to protect our climate and
            the planet.
          </Text>
        </Flex>
      </Flex>
      <Box mt = {{base : 170, lg : 0}} ml  = {{base : "5%" , lg : "10%"}} w = {{base : "90%", lg : "80%"}} >
        <Text mb={4} fontSize={{base : "l" , lg : "4xl"}}>
          We match students with universities all over the world
        </Text>
        <Text fontSize={{base : "l" , lg : "xl"}}>Over 400 universities in 30 countries</Text>
        <Flex mt={4}>
          <img
            style={{ margin: "auto" }}
            src="https://images.studee.com/images/content/content__home--map.png?w=1184&auto=format&q=30&fit=crop"
            alt=""
          />
        </Flex>
        <Flex gap="20%" margin="auto" justifyContent="center" width="60%">
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__global-humanistic-university--logo.png?ixlib=js-2.3.2&auto=format&w=170&h=170&crop=fit&q=45"
            alt=""
          />
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__central-michigan-university--logo.svg"
            alt=""
          />
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__central-queensland-university--logo.svg"
            alt=""
          />
        </Flex>
        <Flex gap="20%" margin="auto" justifyContent="center" width="60%">
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__concordia-university-of-edmonton--logo.svg"
            alt=""
          />
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__avans-university-of-applied-sciences--logo.svg"
            alt=""
          />
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__durham-college--logo.svg"
            alt=""
          />
          <img
            width="20%"
            src="https://images.studee.com/images/university/university__greenville-university--logo.png?ixlib=js-2.3.2&auto=format&w=170&h=170&crop=fit&q=45"
            alt=""
          />
        </Flex>
      </Box>
      {/* <Flex width="80%" margin=" auto" border="1px solid red">
          <Text>180,000 international students started their journey through EduEra</Text>
          <Flex></Flex>
        </Flex> */}
      <Footer />
    </div>
  );
};
