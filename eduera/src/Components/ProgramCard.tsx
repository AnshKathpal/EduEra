import React from "react";
import { Programs } from "../Constraints/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  HStack,
  Heading,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProgramCard = (
  {
    id,
    image,
    programName,
    degree,
    university,
    country,
    programType,
    duration,
    fees,
    startMonth,
  }: Programs
) => {
  return (
    <div>
      <Flex
        boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        bgColor="white"
        mb="5%"
      >
        <Box width="70%">
          <Flex>
            <Box width="15%">
              <Image
                bgColor="white"
                border="1px solid rgb(244,245,247)"
                position="relative"
                left="15%"
                top="-10%"
                width="100%"
                src={image}
              ></Image>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              width="100%"
            >
              <Heading color="rgb(72,135,242)" size="md">
                {programName} - {degree}{" "}
              </Heading>
              <Heading color="black" size="sm">
                {university}, {country}{" "}
              </Heading>
            </Flex>
          </Flex>
          <Flex mb="2%" flexWrap="wrap" justifyContent="space-around">
            <Box bgColor="rgb(244,245,247)" width="20%">
              Program type <br /> <b>{programType}</b>{" "}
            </Box>
            <Box bgColor="rgb(244,245,247)" width="20%">
              Duration <br /> <b>{duration}</b>
            </Box>
            <Box bgColor="rgb(244,245,247)" width="20%">
              Annual Tution Fees <br /> <b>{fees}</b>
            </Box>
            <Box bgColor="rgb(244,245,247)" width="20%">
              Start Date <br /> <b>{startMonth}</b>
            </Box>
          </Flex>
        </Box>

        <Flex
          mb="2%"
          flexDirection="column"
          justifyContent="space-around"
          width="30%"
          borderLeft="2px solid rgb(244,245,247)"
        >
          <Button
            margin="auto"
            width="70%"
            bg={"rgb(242,104,34)"}
            color="white"
            variant="solid"
          >
            Start Application
          </Button>
          <Link to={`/programs/${id}`}>
            <Button
              margin="auto"
              width="70%"
              color="#4887f2"
              border="2px solid #4887f2"
              variant="outline"
            >
              Program Details
            </Button>
          </Link>
        </Flex>
      </Flex>
    </div>

  )
}
