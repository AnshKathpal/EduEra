import { Box, Flex, Stack, Text, Select,Button } from '@chakra-ui/react'
import firstContainerImage from "../Images/firstContainerImage.jpg"
import React from 'react'

export default function Container() {
    const containerStyle = {
        backgroundImage: `url(${firstContainerImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',


    };
    return (
        <Flex style={containerStyle} height={"700px"} width={"98vw"} margin={"auto"} >

            <Box pt={"10%"} w={"50%"}>
                <Text>
                    <Text color={"#13394e"} as={"b"} fontSize='8xl'>Edu </Text>
                    <Text color={"white"} as={"b"} fontSize='8xl'> Era</Text>
                </Text>
                <Text textAlign="start" color={"white"} as={"b"} fontSize='4xl' >
                    Service N1 for the <br />
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
    )
}
