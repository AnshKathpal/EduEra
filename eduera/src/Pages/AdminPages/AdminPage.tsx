import React from "react";
// import AdminSidebar from "../../components/AdminParts/AdminSidebar";
import { AdminHomePage } from "./AdminHomePage";
import AdminSidebar from "../components/AdminParts/AdminSidebar";
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
display:flex
`