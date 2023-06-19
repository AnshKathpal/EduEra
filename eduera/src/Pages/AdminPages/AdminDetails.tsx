import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Heading, Button } from '@chakra-ui/react'

interface Admin {
  name: string;
  email: string;
  contact: string;
  photo: string;
}

const adminDetail: Admin[] = [
  {
    name: 'Ansh Kathpal',
    email: 'anshkathpal17@gmail.com',
    contact: '8448837130',
    photo: 'https://ca.slack-edge.com/T05661M4725-U056LN4SG1Z-90d347292469-512',
  },
  {
    name: 'Shivansh Soni',
    email: 'shivansh@gmail.com',
    contact: '9876543210',
    photo: 'https://ca.slack-edge.com/T05661M4725-U056LJFQMCK-1563c8ced8ee-512',
  },
  {
    name: 'Nikhil Pillare',
    email: 'Nikhilpillare98@gmail.com',
    contact: '9766155637',
    photo: 'https://ca.slack-edge.com/T05661M4725-U056K14K4UD-19da2ba2af64-192',
  },
];

const AdminDetails: React.FC = () => {
  return (
    <div>
      <Text fontSize="3xl" fontWeight="bold" mb="40px"  >Admin Details</Text>
      {adminDetail.map((admin, index) => (
        <div key={index}>

          <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width = "30%"
  margin="40px auto"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={admin.photo}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody >
      <Heading size='md'>{admin.name}</Heading>

      <Text py='2'>
        {admin.contact}
      </Text>
      <Text py='2'>
        {admin.email}
      </Text>
    </CardBody>
  </Stack>
</Card>


        </div>
      ))}
    </div>
  );
};

export default AdminDetails;
