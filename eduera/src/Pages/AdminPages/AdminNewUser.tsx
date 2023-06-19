// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import styled from "styled-components";

// // import AdminSidebar from '../components/AdminParts/AdminSidebar';
// import AdminSidebar from '../../Components/AdminComponents/adminSidebar';
// // import { addProduct } from '../Redux/AdminReducer/action';
// const initialState = {
//     year_of_establishment: "",
//     name: "",
//     country: "",
//     faculty: "",
//     students: "",
//     courses: "",
//     images: [],
//     flag: "",
//     rating: "",
//     place: "",
//     category: "",
//     brochure: "",
//     ownership: "",
// }

// const AdminNewUser = () => {

// const dispatch = useDispatch();

// const [formData, setFormData] = useState(initialState);

//   // update the state object with the input values
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addProduct(formData));
//     setFormData(initialState)
//   };


//     return (
//         <DIV>
//             <AdminSidebar />
//         <TheList>
//             <h1>New User</h1>
//             <UserForm onSubmit={handleSubmit}>
//                 <UserItem>
//                     <label>YearOfEstablishment</label>
//                     <input type="text" placeholder="year" name="year_of_establishment" value={formData.year_of_establishment} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>University Name</label>
//                     <input type="text" placeholder="Name" name='name' value={formData.name} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Country</label>
//                     <input type="text" placeholder="Country" name='country' value={formData.country} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Faculty</label>
//                     <input type="text" placeholder="Faculty" name='faculty' value={formData.faculty} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Students</label>
//                     <input type="text" placeholder="Students" name='students' value={formData.students} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Courses</label>
//                     <input type="text" placeholder="Courses" name='courses' value={formData.courses} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Images</label>
//                     <input type="text" placeholder="Images" name='images' value={formData.images} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Flag</label>
//                     <input type="text" placeholder="Flag" name='flag' value={formData.flag} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Rating</label>
//                     <input type="text" placeholder="Rating" name='rating' value={formData.rating} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Place</label>
//                     <input type="text" placeholder="Place" name='place' value={formData.place} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Category</label>
//                     <input type="text" placeholder="Category" name='category' value={formData.category} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Brochure</label>
//                     <input type="text" placeholder="Brochure" name='brochure' value={formData.brochure} onChange={handleInputChange} />
//                 </UserItem>
//                 <UserItem>
//                     <label>Ownership</label>
//                     <UserRadio>
//                         <input type="radio" name="ownership" value="private" onChange={handleInputChange}  />
//                         <label for="private">Private</label>
//                         <input type="radio" name="ownership" value="Government" onChange={handleInputChange} />
//                         <label for="Government">Government</label>
            
//                     </UserRadio>
//                 </UserItem>
//                 <UserButton type='submit'>Create</UserButton>
//             </UserForm>
//         </TheList>
//         </DIV>
//     )
// };
// export default AdminNewUser;

// const DIV = styled.div`
// display:flex
// `

// export const TheList = styled.div`
//     flex: 4;
//     padding:70px
// `
// const UserForm = styled.form`
//     display: flex;
//     flex-wrap: wrap;
// `
// const UserItem = styled.div`
//     width: 400px;
//     display: flex;
//     flex-direction: column;
//     margin-top: 10px;
//     margin-right: 20px;
//     label {
//         margin-bottom: 10px;
//         font-size: 14px;
//         font-weight: 600;
//         color: rgb(151, 150, 150);
//     }
//     input {
//         height: 20px;
//         padding: 10px;
//         border: 1px solid gray;
//         border-radius: 5px;
//     }
//     select{
//         height: 40px;
//         border-radius: 5px;
//     }
// `
// const UserRadio = styled.div`
//     input {
//         margin-top: 15px;
//     }
//     label{
//         margin: 10px;
//         font-size: 18px;
//         color: #555;
//     }
// `
// const UserButton = styled.button`
//     width: 200px;
//     border: none;
//     background-color: #1876F2;
//     color: white;
//     padding: 7px 10px;
//     font-weight: 600;
//     border-radius: 10px;
//     margin-top: 30px;
//     cursor: pointer;
// `

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";
// import { addProduct } from '../../redux/AdminReducer/action';
import { addProduct } from '../../redux/AdminReducer/api';
// import AdminSidebar from '../components/AdminParts/AdminSidebar';
import AdminSidebar from '../../Components/AdminComponents/adminSidebar';
// import { addProduct } from '../Redux/AdminReducer/action';
import axios from 'axios';
export interface NewDataType {
  id?:number;
  year_of_establishment: string;
  name: string;
  country: string;
  faculty: string;
  students: string;
  courses: string;
  images: string[];
  flag: string;
  rating: string;
  place: string;
  category: string;
  brochure: string;
  ownership: string;
}

const initialState={
   
  year_of_establishment: "",
  name: "",
  country: "",
  faculty: "",
  students: "",
  courses: "",
  images: [],
  flag: "",
  rating: "",
  place: "",
  category: "",
  brochure: "",
  ownership: "",
};

const AdminNewUser: React.FC = () => {
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState<FormData>(initialState);
  const [newData, setNewData] = useState<NewDataType>(initialState);
  // update the state object with the input values
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setFormData({...formData, [e.target.name]: e.target.value });
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

console.log(newData)

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // try {
      // const updatedData: FormData = {
      //   year_of_establishment: formData.year_of_establishment,
      //   name: formData.name,
      //   country: formData.country,
      //   faculty: formData.faculty,
      //   students: formData.students,
      //   courses: formData.courses,
      //   images: formData.images,
      //   flag: formData.flag,
      //   ownership: formData.ownership,
      //   rating: formData.rating,
      //   place: formData.place,
      //   category: formData.category,
      //   brochure: formData.brochure,
      // };

//  const response = await axios.post<ApiResponse>('http://localhost:8080/universities', {data:updatedData});
//       // Handle successful response here
//       console.log(response.data);
//       setFormData(initialState);
//     } catch (error) {
//       // Handle error here
//       console.error(error);
//     }

e.preventDefault();
    addProduct(newData);
    alert("university added")
    setNewData(initialState)
  };
  return (
    <DIV>
      <AdminSidebar />
      <TheList>
        <H1>New University</H1>
        <UserForm onSubmit={handleSubmit}>
          <UserItem>
            <label>YearOfEstablishment</label>
            <input type="text" placeholder="year" name="year_of_establishment" value={newData.year_of_establishment} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>University Name</label>
            <input type="text" placeholder="Name" name='name' value={newData.name} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Country</label>
            <input type="text" placeholder="Country" name='country' value={newData.country} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Faculty</label>
            <input type="text" placeholder="Faculty" name='faculty' value={newData.faculty} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Students</label>
            <input type="text" placeholder="Students" name='students' value={newData.students} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Courses</label>
            <input type="text" placeholder="Courses" name='courses' value={newData.courses} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Images</label>
            <input type="text" placeholder="Images" name='images' value={newData.images} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Flag</label>
            <input type="text" placeholder="Flag" name='flag' value={newData.flag} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Rating</label>
            <input type="text" placeholder="Rating" name='rating' value={newData.rating} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Place</label>
            <input type="text" placeholder="Place" name='place' value={newData.place} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Category</label>
            <input type="text" placeholder="Category" name='category' value={newData.category} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Brochure</label>
            <input type="text" placeholder="Brochure" name='brochure' value={newData.brochure} onChange={handleInputChange} />
          </UserItem>
          <UserItem>
            <label>Ownership</label>
            <UserRadio>
              <input type="radio" name="ownership" value="private" onChange={handleInputChange} />
              <label htmlFor="private">Private</label>
              <input type="radio" name="ownership" value="Government" onChange={handleInputChange} />
              <label htmlFor="Government">Government</label>
            </UserRadio>
          </UserItem>
          <UserButton type='submit'>Create</UserButton>
        </UserForm>
      </TheList>
    </DIV>
  );
};

export default AdminNewUser;

const DIV = styled.div`
  display: flex;
`;
const H1=styled.h1`
font-weight:bolder;
font-size:20px;
text-align:left
`
export const TheList = styled.div`
  flex: 4;
  padding: 10px;
`;

const UserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top:10px
`;

const UserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  label {
    text-align:left;
   
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  input {
    height: 37px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  input::placeholder{
    font-size:14px
  }
  select {
    height: 40px;
    border-radius: 5px;
  }
`;

const UserRadio = styled.div`
display:flex;
padding:20px;
  input {
    margin-top: 15px;
    
  }
  label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;

const UserButton = styled.button`
  width: 400px;
  border: none;
  background-color: #1876F2;
  color: white;
  padding-left: 7px ;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;
