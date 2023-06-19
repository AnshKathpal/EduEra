import React from "react";

import AdminHomePage from "./AdminHompage";
import AdminSidebar from "../../Components/AdminComponents/adminSidebar";
import styled from "styled-components";

export const Adminpage = () =>{
    return (
        
        <DIV>
        
        <AdminSidebar />
         <AdminHomePage />
    </DIV>
        
    )
};

const DIV = styled.div`
display:flex;

`

