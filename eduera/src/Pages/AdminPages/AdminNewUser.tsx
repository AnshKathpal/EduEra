import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components";

import AdminSidebar from '../components/AdminParts/AdminSidebar';

import { addProduct } from '../Redux/AdminReducer/action';
const initialState = {
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
}

const AdminNewUser = () => {

const dispatch = useDispatch();

const [formData, setFormData] = useState(initialState);

  // update the state object with the input values
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData(initialState)
  };


    return (
        <DIV>
            <AdminSidebar />
        <TheList>
            <h1>New User</h1>
            <UserForm onSubmit={handleSubmit}>
                <UserItem>
                    <label>YearOfEstablishment</label>
                    <input type="text" placeholder="year" name="year_of_establishment" value={formData.year_of_establishment} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>University Name</label>
                    <input type="text" placeholder="Name" name='name' value={formData.name} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Country</label>
                    <input type="text" placeholder="Country" name='country' value={formData.country} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Faculty</label>
                    <input type="text" placeholder="Faculty" name='faculty' value={formData.faculty} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Students</label>
                    <input type="text" placeholder="Students" name='students' value={formData.students} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Courses</label>
                    <input type="text" placeholder="Courses" name='courses' value={formData.courses} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Images</label>
                    <input type="text" placeholder="Images" name='images' value={formData.images} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Flag</label>
                    <input type="text" placeholder="Flag" name='flag' value={formData.flag} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Rating</label>
                    <input type="text" placeholder="Rating" name='rating' value={formData.rating} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Place</label>
                    <input type="text" placeholder="Place" name='place' value={formData.place} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Category</label>
                    <input type="text" placeholder="Category" name='category' value={formData.category} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Brochure</label>
                    <input type="text" placeholder="Brochure" name='brochure' value={formData.brochure} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Ownership</label>
                    <UserRadio>
                        <input type="radio" name="ownership" value="private" onChange={handleInputChange}  />
                        <label for="private">Private</label>
                        <input type="radio" name="ownership" value="Government" onChange={handleInputChange} />
                        <label for="Governement">Governement</label>
            
                    </UserRadio>
                </UserItem>
                <UserButton type='submit'>Create</UserButton>
            </UserForm>
        </TheList>
        </DIV>
    )
};
export default AdminNewUser;

const DIV = styled.div`
display:flex
`

export const TheList = styled.div`
    flex: 4;
`
const UserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const UserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
    label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }
    input {
        height: 20px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
    }
    select{
        height: 40px;
        border-radius: 5px;
    }
`
const UserRadio = styled.div`
    input {
        margin-top: 15px;
    }
    label{
        margin: 10px;
        font-size: 18px;
        color: #555;
    }
`
const UserButton = styled.button`
    width: 200px;
    border: none;
    background-color: #1876F2;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`