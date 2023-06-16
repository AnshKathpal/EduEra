import React from 'react'
import { Box, Button, ButtonGroup, HStack, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react'
import { University } from '../Constraints/types';


export const UniversityCard = ({id,year_of_establishment,name,country,faculty,students,courses,images,flag,ownership,rating,place,category,brochure}: University) => {
  return (

    <>

    {/* <Box padding="10" border="1px solid green">
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
    </Box> */}


  <div  style = {{ boxShadow : " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" , backgroundColor : "white", height : "max-content", padding : "10px"}}  >
    <Box     mb={5} height = "280px" >
    <Image
      src={images}
      alt={name}
      borderRadius='lg'
      width="100%"
      height="100%"
    />
    </Box>
    <Stack spacing = {3}>
      <Heading color="rgb(72,135,242)" size='md'>{name}</Heading>
      <Text fontWeight="extrabold" >
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
<Stack mt={3} spacing={5} >
  <Button bg={"rgb(242,104,34)"} color = "white" variant="solid" >Start Application</Button>
  <Button color="#4887f2" border= "2px solid #4887f2"  variant="outline" >Find your Program Matches</Button>
  </Stack>

  </div>
  {/* <Divider /> */}
  {/* <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Start Application
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Find your Programs
      </Button>
    </ButtonGroup>
  </CardFooter> */}






    </>

  )
}
