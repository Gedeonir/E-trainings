
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import AdminHome from "./pages/Admin/pages/AdminHome";
import AdminCourses from "./pages/Admin/pages/AdminCourses";
import CourseDetailsUser from "./pages/CourseDetailsUser";
import AdminCourseDetail from "./pages/Admin/pages/AdminCourseDetail";
import AdminLogin from "./pages/Admin/pages/AdminLogin";
import LessonUser from "./pages/LessonUser";
import AdminLesson from "./pages/Admin/pages/AdminLesson";

const AppRoutes = (prop) => {
  
    return (
      <div className="">
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/courses/:id" element={<CourseDetailsUser/>}/>
          <Route path="/courses/:id/lesson/:lesson" element={<LessonUser/>}/>
          <Route path="src/pages/signup" element={<SignUp/>}/>
          <Route path="/users/admin/home" element={<AdminHome/>}/>
          <Route path="/users/admin/courses" element={<AdminCourses/>}/>
          <Route path="/users/admin/courses/:id" element={<AdminCourseDetail/>}/>
          <Route path="/users/admin/courses/:id/lesson/:lesson" element={<AdminLesson/>}/>\
          <Route path="users/admin/login" element={<AdminLogin/>}/>
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;