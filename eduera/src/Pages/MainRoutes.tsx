import { Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { ProgramList } from "./ProgramList";
import { UniversitiesList } from "./UniversitiesList";
import { AdminDashboard } from "./AdminPages/AdminDashboard";
import { ProgramDetails } from "./ProgramDetails";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/programs" element={<ProgramList />}></Route>
      <Route path="/universities" element={<UniversitiesList />}></Route>
      <Route path="/admin" element={<AdminDashboard />}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      <Route path="/programs/:id" element={<ProgramDetails/>}></Route>
    </Routes>
  );
};
