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
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'

import {useState} from "react"
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch, useSelector } from "../redux/store";


import {useSelector} from "react-redux"



export const SignIn= ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const [modalHeader, setModalHeader] = useState('SignIn');


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state
  const toast = useToast();
  // const dispatch = useAppDispatch();
  const location = useLocation();

  const userName = useSelector((store) => store)
  console.log(userName)

  const navigate = useNavigate();
  const URL = "https://json-server-b26.onrender.com";


  // const handleSubmit = () =>{
  //   alert("Logged In")
  //   setModalHeader("Shivansh Soni")
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = await axios(`${URL}/login`).then((res) => res.data);

    if (!email || !password) {
      toast({
        title: "failed",
        description: "all filled are required",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    const newData = data.find((el: any) => el.email === email);
    // console.log(newData, data)
    if (newData) {
      if (newData.password === password) {
        toast({
          title: "Log in Successful.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });

        
        onClose();
        setTimeout(() => {
          navigate(location.state?.data || "/", { replace: true });
          setLoggedIn(true); // Update loggedIn state to true
        }, 1000);
        return;
      } else {
        toast({
          title: "Login Failed!!",
          description: "Password didn't match",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    } else {
      toast({
        title: "Wrong credentials",
        description: "Make Sure you are registered.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  }

  return (
    <>
    <Flex alignItems={"center"} >

      {/* <Text color={"white"} as={"u"} onClick={onOpen}>{modalHeader}</Text> */}
      {/* <Text color={"white"} as={"u"} onClick={onOpen}>SignIn</Text> */}

      {loggedIn ? (
          <Text color={"white"} as={"u"}>Ansh Kathpal</Text>
        ) : (
          <Text color={"white"} as={"u"} onClick={onOpen}>SignIn</Text>
        )}
    </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >SignIn</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={"7%"}>
          <Flex
      minH={'100%'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'}  px={6}>
        
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack >
            <form onSubmit={handleSubmit} >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password}
                  onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              type = "submit"
              // onClick = {handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}