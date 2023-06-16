import { Box, Flex, Stack, Text, Select, Button, Image, UnorderedList, ListItem } from '@chakra-ui/react'
import firstContainerImage from "../Images/firstContainerImage.jpg"
import imageone from "../Images/fistImage1.jpg"
import imagetwo from "../Images/fistImage2.jpg"
import imagethree from "../Images/pexels-fauxels-3184315.jpg"
import React from 'react'
import "../App.css"

export default function Container() {
    const containerStyle = {
        backgroundImage: `url(${imageone})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',


    };
    return (
        <Box >

            <Flex style={containerStyle} h={"95vh"} width={"100%"} margin={"auto"} mb={"3%"}>

                <Box pt={"10%"} w={"50%"}>
                    <Text>
                        <Text color={"#13394e"} as={"b"} fontSize='8xl'>Edu </Text>
                        <Text color={"white"} as={"b"} fontSize='8xl'> Era</Text>
                    </Text>
                    <Text textAlign="start" color={"white"} as={"b"} fontSize='4xl' >
                        Service N°1 for the <br />
                        selection of educational <br />
                        programs abroad
                    </Text>
                    <Flex mt={"5%"} ml={"7%"}>
                        <Select border={"0px solid white"} borderRadius={"0"} w={"200px"} backgroundColor={"white"} placeholder='Country of Study'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Select borderRadius={"0"} w={"200px"} backgroundColor={"white"} placeholder='Type of Training'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Select borderRadius={"0"} w={"200px"} backgroundColor={"white"} placeholder='Program'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Button w={"20%"} borderRadius={"0"} bgColor={'#4787f3'}>Show</Button>
                    </Flex>
                </Box>


            </Flex>
            <Flex w={"100%"} h={"60vh"}>
                <Flex justifyContent={"center"} alignItems={"center"} w={"50%"} bgColor={"#4787f3"} >
                    <Box textAlign={"center"} w={"55%"} >

                        <Text color={"white"} as={"b"} fontSize='6xl'>Advantage of Eduera</Text>
                        <UnorderedList lineHeight={"200%"} color={"white"}>
                            <ListItem >1 application at the same time in 7 universities</ListItem>
                            <ListItem>Free online support</ListItem>
                            <ListItem>Free verification of documents and questionnaires</ListItem>
                            <ListItem>All registration remotely</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
                <Box w={"50%"}>
                    <Image h={"100%"} w={"100%"} src={imagethree}></Image>
                </Box>
            </Flex>
            <Box p={"2%"}  w={"100%"} h={"70vh"}>
                <Box mb={"4%"} textAlign={"start"}><Text fontSize='4xl' as={"b"}>4 steps for admission </Text></Box>
                <Flex mb={"3%"} justifyContent={"space-around"} >
                    <Text className='option'>1. Choose </Text>
                    <Text className='option'>2. Get Ready</Text>
                    <Text className='option'>3. Register</Text>
                    <Text className='option'>4. Submit Documents</Text>
                </Flex>
                <Flex justifyContent={"space-around"}  w={"100%"}>
                    <Box lineHeight={"300%"} w={"50%"} textAlign={"start"}>
                        <Text mb={"2%"} fontSize='3xl'>Choosing an educational institution</Text>
                        <Text fontSize='xl'>Before you start choosing an educational institution, you should critically assess the level of your academic achievements and success. If you want to enter a prestigious university, you must have an appropriately high academic level. If you feel that your knowledge is not enough, you can choose preparatory courses or college. It is important not to overestimate your knowledge, because the load will be huge if you are in an unfamiliar country, in an unusual enviroment, in a diffrent language. </Text>
                    </Box>
                    <Box   w={"40%"}>
                        <Flex className='education' justifyContent={"center"} alignItems={"center"} w={"50%"} h={"20%"} m={"auto"} mt={"4%"} border={"1px solid #4787f3"}><Text as={"b"}>Higher Education</Text></Flex>
                        <Flex className='education' justifyContent={"center"} alignItems={"center"} w={"50%"} h={"20%"} m={"auto"} mt={"4%"} border={"1px solid #4787f3"}><Text as={"b"}>Secondary Education</Text></Flex>
                        <Flex className='education' justifyContent={"center"} alignItems={"center"} w={"50%"} h={"20%"} m={"auto"} mt={"4%"}  border={"1px solid #4787f3"}><Text as={"b"}>Language Classes</Text></Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
