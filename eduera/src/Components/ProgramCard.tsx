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
        direction={{base : "column" , lg : "row"}}
      >
        <Box width={{base : "100%" , lg : "70%"}} >
          <Flex>
            <Box width="15%" display = {{base : "none" , lg : "block"}} >
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
              mb = {{base : "3" , lg : "0"}}
              mt = {{base : "3" , lg : "0"}}
              // gap = {{base : "4" , lg : "0"}}
            >
              <Heading color="rgb(72,135,242)" size={{base : "sm" , lg : "md"}}>
                {programName} - {degree}{" "}
              </Heading>
              <Heading color="black" size={{base : "sm" , lg : "md"}}>
                {university}, {country}{" "}
              </Heading>
            </Flex>
          </Flex>
          <Flex direction={{base : "column" , lg : "row"}} mb="2%" gap = {"2"} align = "center" justifyContent="space-around">
            <Box bgColor="rgb(244,245,247)" width={{base : "90%" , lg : "20%"}}>
              Program type <br /> <b>{programType}</b>{" "}
            </Box>
            <Box bgColor="rgb(244,245,247)" width={{base : "90%" , lg : "20%"}}>
              Duration <br /> <b>{duration}</b>
            </Box>
            <Box bgColor="rgb(244,245,247)" width={{base : "90%" , lg : "20%"}}>
              Annual Tution Fees <br /> <b>{fees}</b>
            </Box>
            <Box bgColor="rgb(244,245,247)" width={{base : "90%" , lg : "20%"}}>
              Start Date <br /> <b>{startMonth}</b>
            </Box>
          </Flex>
        </Box>

        <Flex
          mb="2%"
          flexDirection={{base : "row" , lg : "column"}}
          justifyContent="space-around"
          width={{base : "100%" , lg : "30%"}}
          borderLeft="2px solid rgb(244,245,247)"
        >
          <Link to={`/applied/${id}`}>
          <Button
            margin="auto"
            width={{base : "90%" , lg : "70%"}}
            bg={"rgb(242,104,34)"}
            color="white"
            variant="solid"
          >
            Start Application
          </Button>
          </Link>
          <Link to={`/programs/${id}`}>
            <Button
              margin="auto"
              width={{base : "90%" , lg : "70%"}}
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
