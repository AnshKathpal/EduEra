import {
  Box,
  Flex,
  Stack,
  Text,
  Select,
  Button,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { ArrowForwardIcon, BellIcon } from "@chakra-ui/icons";
import YouTube, { YouTubeProps } from "react-youtube";
import firstContainerImage from "../Images/firstContainerImage.jpg";
import imageone from "../Images/fistImage1.jpg";
import imagetwo from "../Images/fistImage2.jpg";
import imagethree from "../Images/pexels-fauxels-3184315.jpg";
import React from "react";
import "../App.css";

export default function Container() {
  const containerStyle = {
    backgroundImage: `url(${imageone})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 120%",
  };
  const opts: YouTubeProps["opts"] = {
    height: "130%",
    width: "100%",
  };
  return (
    <Box>
      <Box h={"90px"} w={"100%"} bgColor={"#898a88"}></Box>

      <Flex
        style={containerStyle}
        h={{ base: "30vh", sm: "50vh", md: "100vh" }}
        width={"100%"}
        margin={"auto"}
        mb={"3%"}
        pb={"5%"}
      >
        <Box pt={"10%"} w={"50%"}>
          <Text>
            <Text
              color={"#13394e"}
              as={"b"}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              Edu{" "}
            </Text>
            <Text
              color={"white"}
              as={"b"}
              fontSize={{ base: "4xl", md: "8xl" }}
            >
              {" "}
              Era
            </Text>
          </Text>
          <Text
            textAlign="start"
            color={"white"}
            as={"b"}
            fontSize={{ base: "l", md: "3xl" }}
          >
            Service No. 1 for the <br />
            selection of educational <br />
            programs abroad
          </Text>
          <Flex
            display={{ base: "none", lg: "flex" }}
            mt={"5%"}
            ml={"7%"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Select
              opacity={"0.7"}
              borderRadius={"0"}
              w={"200px"}
              backgroundColor={"white"}
              placeholder="Country of Study"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              opacity={"0.7"}
              borderRadius={"0"}
              w={"200px"}
              backgroundColor={"white"}
              placeholder="Type of Training"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              opacity={"0.7"}
              borderRadius={"0"}
              w={"200px"}
              backgroundColor={"white"}
              placeholder="Program"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Button
              opacity={"0.9"}
              w={"200px"}
              borderRadius={"0"}
              bgColor={"#4787f3"}
            >
              Show
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex
        w={"95%"}
        m={"auto"}
        h={{ base: "100%", md: "100%" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={{ base: "100%", md: "50%" }}
          bgColor={"#4787f3"}
        >
          <Box textAlign={"center"} w={{ base: "95%", lg: "55%" }}>
            <Text
              color={"white"}
              as={"b"}
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              Advantage of Eduera
            </Text>
            <UnorderedList lineHeight={"200%"} color={"white"}>
              <ListItem>
                1 application at the same time in 7 universities
              </ListItem>
              <ListItem>Free online support</ListItem>
              <ListItem>
                Free verification of documents and questionnaires
              </ListItem>
              <ListItem>All registration remotely</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Box w={{ base: "100%", md: "50%" }}>
          <Image h={"100%"} w={"100%"} src={imagethree}></Image>
        </Box>
      </Flex>
      <Box m={"auto"} w={"90%"} mb={"5%"} p={"2%"} h={"auto"}>
        <Box mb={"4%"} textAlign={{ base: "center", lg: "start" }}>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            as={"b"}
            className="colorprop"
          >
            4 steps for admission{" "}
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "3" }}
          mb={"3%"}
          justifyContent={"space-around"}
        >
          <Text className="option">1. Choose </Text>
          <Text className="option">2. Get Ready</Text>
          <Text className="option">3. Register</Text>
          <Text className="option">4. Submit Documents</Text>
        </Flex>
        <Flex
          justifyContent={"space-around"}
          w={"100%"}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            lineHeight={{ base: "170%", lg: "300%" }}
            w={{ base: "100%", md: "50%" }}
            textAlign={"start"}
          >
            <b>
              <Text
                mb={"2%"}
                fontSize={{ base: "xl", lg: "3xl" }}
                className="colorprop"
              >
                Choosing an educational institution
              </Text>
            </b>
            <Text fontSize={{ base: "16px", lg: "xl" }}>
              Before you start choosing an educational institution, you should
              critically assess the level of your academic achievements and
              success. If you want to enter a prestigious university, you must
              have an appropriately high academic level. If you feel that your
              knowledge is not enough, you can choose preparatory courses or
              college. It is important not to overestimate your knowledge,
              because the load will be huge if you are in an unfamiliar country,
              in an unusual enviroment, in a diffrent language.{" "}
            </Text>
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Flex
              className="education"
              justifyContent={"center"}
              alignItems={"center"}
              w={"60%"}
              h={"20%"}
              m={"auto"}
              mt={"4%"}
              border={"1px solid #4787f3"}
            >
              <Text as={"b"}>Higher Education</Text>
            </Flex>
            <Flex
              className="education"
              justifyContent={"center"}
              alignItems={"center"}
              w={"60%"}
              h={"20%"}
              m={"auto"}
              mt={"4%"}
              border={"1px solid #4787f3"}
            >
              <Text as={"b"}>Secondary Education</Text>
            </Flex>
            <Flex
              className="education"
              justifyContent={"center"}
              alignItems={"center"}
              w={"60%"}
              h={"20%"}
              m={"auto"}
              mt={"4%"}
              border={"1px solid #4787f3"}
            >
              <Text as={"b"}>Language Classes</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box m={"auto"} w={"90%"} h={{ base: "100%", md: "100%" }} mb={"5%"}>
        <Tabs>
          <TabList>
            <Flex w={"100%"} justifyContent={"space-evenly"}>
              <Tab>
                <Text
                  as={"b"}
                  fontSize={{ base: "l", md: "xl" }}
                  className="colorprop"
                >
                  Higher Education
                </Text>
              </Tab>
              <Tab>
                <Text
                  as={"b"}
                  fontSize={{ base: "l", md: "xl" }}
                  className="colorprop"
                >
                  Secondary Education
                </Text>
              </Tab>
              <Tab>
                <Text
                  as={"b"}
                  fontSize={{ base: "l", md: "xl" }}
                  className="colorprop"
                >
                  Language Classes
                </Text>
              </Tab>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={6}
              >
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/161074/vienna-st-charles-s-church-downtown-church-161074.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Austria</Text>
                  <Text>27 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/2434267/pexels-photo-2434267.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Australia</Text>
                  <Text>34 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/5215090/pexels-photo-5215090.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Belgium</Text>
                  <Text>28 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/16149657/pexels-photo-16149657/free-photo-of-clouds-over-buildings-around-tower-bridge.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Great Britain</Text>
                  <Text>43 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/1128416/pexels-photo-1128416.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Germany</Text>
                  <Text>58 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Denmark</Text>
                  <Text>22 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Italy</Text>
                  <Text>40 faculties</Text>
                </GridItem>
                <GridItem
                  borderRadius={"5%"}
                  className="education"
                  w="100%"
                  bg="white"
                  h={"270px"}
                >
                  <Image
                    w={"100%"}
                    h={"80%"}
                    borderRadius={"5% 5% 0 0"}
                    src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400"
                  ></Image>
                  <Text fontSize={"xl"}>Spain</Text>
                  <Text>52 faculties</Text>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Text fontSize={"6xl"}> Network Error!</Text>
              <Text>Please try again leter</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize={"6xl"}> Network Error!</Text>
              <Text>Please try again leter</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Flex w={"90%"} m={"auto"} direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "30%" }}>
          <Image
            w={"100%"}
            h={"78%"}
            src="https://images.pexels.com/photos/1181547/pexels-photo-1181547.jpeg?auto=compress&cs=tinysrgb&w=400"
          />
        </Box>
        <Box w={{ base: "100%", md: "70%" }} h={"100%"}>
          <Text className="colorprop" fontSize={"3xl"} as={"b"}>
            Faculties choose yours
          </Text>
          <Flex
            justify="center"
            align={"center"}
            direction={{ base: "column", lg: "row" }}
            w={"100%"}
          >
            <Box lineHeight={"400%"} w={{ base: "100%", lg: "50%" }}>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Art and design
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Bussiness and management
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Natural and exact science
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Jurisprudence
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Tourism and hospitality
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Economy
              </Text>
            </Box>
            <Box lineHeight={"400%"} w={{ base: "100%", lg: "50%" }}>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                International relationships
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Media and communication
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Humanitarian science
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Biology and Biomedicine
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                Social science
              </Text>
              <Text className="education" fontSize={{ base: "17px", lg: "xl" }}>
                IT, Computer science
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box w={"90%"} m={"auto"}>
        <Text className="colorprop" as={"b"} fontSize={"3xl"}>
          Our Services
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Visa
            </Text>
            <Text fontSize={"l"}>
              A visa is issued for the purpose of obtaining secondary, higher or
              vocational education abroad.Also, on a student visa, you can take
              language courses or advanced courses qualification
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Insurance
            </Text>
            <Text fontSize={"l"}>
              Insurance in State Insurance Company provides an opportunity to
              cover all costs of treatment, visits to the hospital and
              healthcare facilities, test and diagnostics.
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Exam Preparation
            </Text>
            <Text fontSize={"l"}>
              Our accredited TOEFL Preparation courses and academic English exam
              preparation course will help you develop your test skills and
              improve your English level for exam success.
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Accompanying a student
            </Text>
            <Text fontSize={"l"}>
              Full support of the student in the process of admission from the
              selection of an educational institution abroad to obtaining a
              student visa and organization of travel abroad.
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Admission on TOP universities
            </Text>
            <Text fontSize={"l"}>
              All stages of admission are important: from choosing an
              educational institution to obtaining a visa. Therefore, we want to
              go through the enrollment process together with you, saving your
              valuable time and doing our favorite work
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
          <GridItem
            p={"2%"}
            borderRadius={"5px"}
            border={"3px solid #4787f3"}
            className="education"
            w="100%"
            h="100%"
            bg="white"
            color={"#4787f3"}
          >
            <Text as={"b"} fontSize={"2xl"}>
              Writing an ESSAY
            </Text>
            <Text fontSize={"l"}>
              You prepare for tests, draw up your thoughts in motivational
              letters and essays under close guidance of ours. This stage ends
              submission of documets to the admission to the admission office
            </Text>
            <Flex justifyContent={"flex-end"} w={"90%"} m={"auto"} mt={"2%"}>
              <ArrowForwardIcon boxSize={"5"} />
            </Flex>
          </GridItem>
        </Grid>
        <Box w={"90%"} m={"auto"} mt={"5%"} h={"100%"}>
          <Text className="colorprop" fontSize={"3xl"} as={"b"}>
            Feedback from our Students
          </Text>
          <Flex
            justifyContent={"space-evenly"}
            w={"100%"}
            m={"auto"}
            mt={"3%"}
            direction={{ base: "column", md: "row" }}
            gap={"6%"}
          >
            <YouTube videoId="0PwNW7PAUzQ" opts={opts} />
            <br />
            <YouTube videoId="d8R-cfipBvg" opts={opts} />
            <br />
            <YouTube videoId="p1bsCYFTh0g" opts={opts} />
          </Flex>
        </Box>
      </Box>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        m={"auto"}
        mt={"5%"}
        backgroundColor={"#4787f3"}
      >
        <Text mt={"2%"} fontSize={{ base: "l", md: "3xl" }} color={"white"}>
          Subscribe so you don't miss out on great deals
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        m={"auto"}
        backgroundColor={"#4787f3"}
        h={{ base: "100px", lg: "200px" }}
      >
        <InputGroup w={{ base: "70%", lg: "50%" }} m={"auto"}>
          <InputRightElement pointerEvents="none">
            <BellIcon boxSize={"6"} />
          </InputRightElement>
          <Input
            h={"50"}
            backgroundColor={"white"}
            type="tel"
            placeholder="example@gmail.com"
          />
        </InputGroup>
      </Flex>
    </Box>
  );
}
