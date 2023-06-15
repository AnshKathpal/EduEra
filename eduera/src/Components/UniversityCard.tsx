import React from 'react'
import { Box, Button, ButtonGroup, HStack, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react'
import { University } from '../Constraints/types';


export const UniversityCard = ({id,year_of_establishment,name,country,faculty,students,courses,images,flag,ownership,rating,place,category,brochure}: University) => {
  return (

    <>

    <Box padding="10" border="1px solid red">

<Box border="1px solid blue" height="40%" >
<Image
      src={images}
      alt={name}
      borderRadius='lg'
      objectFit="fill"
    />
</Box>
<Stack border="1px solid blue" mt='6'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {place}, {country}
      </Text>
      <Flex justifyContent="space-between" >
        <Box w="48%" bgColor="rgb(244,245,247)" > <b>Type</b>   <br /> {ownership} </Box>
        <Box w="48%" bgColor="rgb(244,245,247)" > <b>Students</b> <br /> {students} </Box>
      </Flex>
      <Flex justifyContent="space-between" >
        <Box w="48%"  bgColor="rgb(244,245,247)" > <b>Establishment Year</b> <br /> {year_of_establishment} </Box>
        <Box w="48%"  bgColor="rgb(244,245,247)"> <b>Courses</b> <br /> {courses} </Box>
      </Flex>
    </Stack>
    </Box>
{/* 
<Card maxW='sm'>
  <CardBody border="1px solid red" >
    <Box border = "1px solid red" height="40%" >
    <Image
      src={images}
      alt={name}
      borderRadius='lg'
      width="100%"
      height="100%"
    />
    </Box>
    <Stack border="1px solid blue" mt='6'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {place}, {country}
      </Text>
      <Flex justifyContent="space-between" >
        <Box w="48%" bgColor="rgb(244,245,247)" > <b>Type</b>   <br /> {ownership} </Box>
        <Box w="48%" bgColor="rgb(244,245,247)" > <b>Students</b> <br /> {students} </Box>
      </Flex>
      <Flex justifyContent="space-between" >
        <Box w="48%"  bgColor="rgb(244,245,247)" > <b>Establishment Year</b> <br /> {year_of_establishment} </Box>
        <Box w="48%"  bgColor="rgb(244,245,247)"> <b>Courses</b> <br /> {courses} </Box>
      </Flex>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Start Application
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Find your Programs
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card> */}






    </>

  )
}
