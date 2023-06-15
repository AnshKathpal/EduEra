import React, { useEffect } from "react";
import styled from "styled-components";

import { AdminChart } from "../components/AdminParts/AdminChart";
import { useDispatch, useSelector } from "react-redux";
import { AdminFeatured } from "../components/AdminParts/AdminFeatured";


import { getProduct } from "../Redux/AdminReducer/action";

export const AdminHomePage = () => {

    const dispatch = useDispatch();

  const userData = useSelector((store) => store.adminReducer.products);

  useEffect(()=>{
    dispatch(getProduct)
  },[])

  return (
   
    <HomeContainer>
      <AdminFeatured userData={userData} />
      <AdminChart data={userData} title="user Analytic" grid dataKey="students" />
    </HomeContainer>
    
  );
};

const HomeContainer = styled.div`
  flex: 4;
`;
