
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
import SignIn from "./pages/SignIn";
import AddNewCourse from "./pages/Admin/pages/AddLesson";
import MyProfile from "./pages/MyProfile";
import  NotFound from "./components/notFound";
import Protected from "./utils/ProtectedRoutes";

const AppRoutes = (prop) => {
  const tokenMember = setTimeout(()=>{
    return sessionStorage.getItem('memberToken');
  },2000);
  const tokenAdmin=setTimeout(()=>{
    sessionStorage.getItem('userToken');
  },2000); 

  return (
    <Routes>
        <Route path="/" index element={
          <Protected token={tokenMember} route="/signin">              
            <Homepage />
          </Protected>
        } />
        <Route path="/courses/:id" element={
          <Protected token={tokenMember} route="/signin">              
            <CourseDetailsUser/>
          </Protected>
        }/>
        <Route path="/courses/:id/lesson/:lesson" element={
          <Protected token={tokenMember} route="/signin">              
            <LessonUser/>
          </Protected>
        }/>
        <Route path="my/profile" element={
          <Protected token={tokenMember} route="/signin">              
            <MyProfile/>
          </Protected>
        }/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>

        <Route path="/users/admin/addnewcourse" element={
          <Protected token={tokenAdmin} route="/users/admin/login">              
            <AddNewCourse/>
          </Protected>
        }/>
        <Route path="/users/admin/home" element={
          <Protected token={tokenAdmin} route="/users/admin/login">   
            <AdminHome/>
          </Protected>
        }/>
        <Route path="/users/admin/courses" element={
          <Protected token={tokenAdmin} route="/users/admin/login">   
            <AdminCourses/>
          </Protected>
        }/>
        <Route path="/users/admin/courses/:id" element={
          <Protected token={tokenAdmin} route="/users/admin/login">   
            <AdminCourseDetail/>
          </Protected>
        }/>
        <Route path="/users/admin/courses/:id/lesson/:lesson" element={
          <Protected token={tokenAdmin} route="/users/admin/login">   
            <AdminLesson/>
          </Protected>}
        />
        <Route path="/users/admin/login" element={<AdminLogin/>}/>
        <Route path="*" element={<NotFound/>} />

    </Routes>
    );
  };
  
  export default AppRoutes;