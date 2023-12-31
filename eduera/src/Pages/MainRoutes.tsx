import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { ProgramList } from "./ProgramList";
import { UniversitiesList } from "./UniversitiesList";
import { AdminDashboard } from "./AdminPages/AdminDashboard";
import { ProgramDetails } from "./ProgramDetails";
import { Applied } from "./Applied";
import { MyApplications } from "./MyApplications";
import AdminUserList from "./AdminPages/AdminUserList";
import AdminUser from "./AdminPages/AdminUsers";
import AdminNewUser from "./AdminPages/AdminNewUser";
import { AdminAnalitytics } from "./AdminPages/AdminAnalitytics";
import AdminDetails from "./AdminPages/AdminDetails";
import { Adminpage } from "./AdminPages/AdminPage";

export const MainRoutes = () => {
  return (


    
    <Routes>


      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/programs" element={<ProgramList />}></Route>
      <Route path="/universities" element={<UniversitiesList />}></Route>
      <Route path="/admin" element={<Adminpage />}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      <Route path="/programs/:id" element={<ProgramDetails/>}></Route>
      <Route path="/applied/:id" element={<Applied/>}></Route>
      <Route path="/applications" element={<MyApplications/>}></Route>

      <Route path="/adminuni" element={<AdminUserList />}></Route>
      <Route path="/adminuni/:id" element={<AdminUser />}></Route>
      {/* <Route path="/adminuni/:id" element={<AdminUser/>}></Route> */}
      <Route path="/newUser" element={<AdminNewUser />}></Route>
      <Route path="/AdminAnalytics" element={<AdminAnalitytics/>}></Route>
      <Route path="/adminDetails" element={<AdminDetails/>}></Route>
    </Routes>
  );
};
