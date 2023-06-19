import React from 'react';

interface Admin {
  name: string;
  email: string;
  contact: string;
  photo: string;
}

const adminDetail: Admin[] = [
  {
    name: 'Ansh Kathpal',
    email: 'admin1@example.com',
    contact: '1234567890',
    photo: 'https://example.com/admin1.jpg',
  },
  {
    name: 'Shivansh Soni',
    email: 'admin2@example.com',
    contact: '9876543210',
    photo: 'https://example.com/admin2.jpg',
  },
  {
    name: 'Nikhil Pillare',
    email: 'Nikhilpillare98@gmail.com',
    contact: '9766155637',
    photo: 'https://example.com/admin3.jpg',
  },
];

const AdminDetails: React.FC = () => {
  return (
    <div>
      <h1>Admin Details</h1>
      {adminDetail.map((admin, index) => (
        <div key={index}>
          <h3>{admin.name}</h3>
          <img src={admin.photo} alt={`Photo of ${admin.name}`} />
          <p>Email: {admin.email}</p>
          <p>Contact: {admin.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDetails;
