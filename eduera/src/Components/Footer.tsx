import React from "react";
import { ReactNode } from "react";
import logo from "../Images/logo.png";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";
import AdminLoginBtn from "./AdminComponents/adminLoginBtn";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"#898a88"} color={"white"}>
      <Flex margin = "auto" justify={"center"} direction={{base : "column", lg : "row"}}  maxW={"6xl"} py={10}>
        <Stack justify={"center"} spacing={6}>
            <Flex justifyContent = "center" >
              <Image w={{base : "25%", lg : "45%"}} src={logo} />
            </Flex>
            <Text>Service No. 1 for selection educational programs abroad</Text>
          </Stack>
        <SimpleGrid
        // placeItems={"center"}
          templateColumns={{ base: "2fr 2fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
          placeItems = {{base : "center" , lg : "baseline" }}
        >
          {/* <Stack spacing={6}>
            <Box>
              <Image h={"65%"} src={logo} />
            </Box>
            <Text>Service No. 1 for selection educational programs abroad</Text>
          </Stack> */}
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Education</Link>
            <Link href={"#"}>Education </Link>
            <Link href={"#"}>Language</Link>
            <Link href={"#"}>Services</Link>
            <AdminLoginBtn />
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Flex>
      <Text fontSize={"xl"}>© 2023 EduEra. All rights reserved</Text>
    </Box>
  );
}
