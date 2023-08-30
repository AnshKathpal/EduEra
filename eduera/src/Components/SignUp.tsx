import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalUse, setModalUse] = useState("SignUp");
  const toast = useToast();

  let url = "https://json-server-b26.onrender.com";

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/login`, {
        username: `${firstName} ${lastName}`,
        email,
        password,
      });
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error("Error creating account:", error);
      toast({
        title: "Error",
        description: "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box display={{ base: "none", md: "block" }}>
      <Button onClick={onOpen}>{modalUse}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
            >
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                User Registration
              </Heading>
              <form onSubmit={handleFormSubmit}>
                <Flex>
                  <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                      First name
                    </FormLabel>
                    <Input
                      id="first-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                      Last name
                    </FormLabel>
                    <Input
                      id="last-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                    />
                  </FormControl>
                </Flex>
                <FormControl mt="2%">
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email address
                  </FormLabel>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                  />
                  <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                      <Input
                        type="submit"
                      />
                    </Flex>
                  </ButtonGroup>
                </FormControl>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
