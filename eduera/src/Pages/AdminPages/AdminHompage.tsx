
import React, { useEffect } from "react";
import styled from "styled-components";
import { AdminChart } from "../../Components/AdminComponents/AdminChart";
import { useDispatch } from "react-redux";
import { AdminFeatured } from "../../Components/AdminComponents/AdminFeatured";
import { useAppSelector } from "../../redux/store";

import PromptLogin from '../../Components/AdminComponents/AdminLogin';

import { getProduct } from "../../redux/AdminReducer/action";
import { University } from "../../Constraints/types";
interface UserData {
    students: number;
    faculty: number;
  }
const AdminHomePage: React.FC = () => {

  const handleLogin = (username: string, password: string) => {
    // Check the username and password against a backend API or other authentication mechanism
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful. Access granted to /admin route');
      // Perform the necessary actions for the /admin route
    } else {
      console.log('Login failed. Access denied.');
    }
  };


const dispatch = useDispatch();

const universities = useAppSelector((store) => store.universitiesReducer.data);

// useEffect(() => {
// dispatch(getProduct());
// }, []);
console.log(universities)
const userData: UserData[] = universities.map((university) => ({
    students: university.students,
    faculty: university.faculty,
  }));
return (
<>

<HomeContainer>
<AdminFeatured userData={userData} />
<AdminChart data={userData} title="user Analytic" grid dataKey="students" />
</HomeContainer>
</>


);
};

const HomeContainer = styled.div `flex: 4;

`;

export default AdminHomePage;
