// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { AdminChart } from "../../Components/AdminComponents/AdminChart" ;

// import { useDispatch, useSelector } from "react-redux";
// import {AdminFeatured} from "../../Components/AdminComponents/AdminFeatured"
// import { useAppSelector } from "../../redux/store";
// import { getProduct } from "../../redux/AdminReducer/action";


// export const AdminHomePage = () => {
//   const dispatch = useDispatch();

//   const userData = useAppSelector((store) => store.universitiesReducer.data);

//   useEffect(()=>{
//     dispatch(getProduct)
//   },[])


//   return (
   
//     <HomeContainer>
//       <AdminFeatured userData={userData} />
//       <AdminChart data={userData} title="user Analytic" grid dataKey="students" />
//     </HomeContainer>
    
//   );
// };

// const HomeContainer = styled.div`
//   flex: 4;
// `;


import React, { useEffect } from "react";
import styled from "styled-components";
import { AdminChart } from "../../Components/AdminComponents/AdminChart";
import { useDispatch } from "react-redux";
import { AdminFeatured } from "../../Components/AdminComponents/AdminFeatured";
import { useAppSelector } from "../../redux/store";
import { getProduct } from "../../redux/AdminReducer/action";
import { University } from "../../Constraints/types";
interface UserData {
    students: number;
    faculty: number;
  }
const AdminHomePage: React.FC = () => {
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
<HomeContainer>
<AdminFeatured userData={userData} />
<AdminChart data={userData} title="user Analytic" grid dataKey="students" />
</HomeContainer>
);
};

const HomeContainer = styled.div `flex: 4;

`;

export default AdminHomePage;
