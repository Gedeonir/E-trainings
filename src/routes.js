
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoursesDetails from "./pages/CoursesDetails";


const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/courses/:id" element={<CoursesDetails/>}/>
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;