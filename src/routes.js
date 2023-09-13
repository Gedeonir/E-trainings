
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
import {Protected, ProtectedAdmin} from "./utils/ProtectedRoutes";
import MembersList from "./pages/Admin/pages/MembersList";
import ViewQuizDetails from "./pages/Admin/pages/ViewQuizDetails";
import Quizz from "./pages/Quizz";


const AppRoutes = (prop) => {

  return (
    <Routes>
        <Route path="/" index element={
          <Protected  route="/signin">              
            <Homepage />
          </Protected>
        } />
        <Route path="/courses/:id" element={
          <Protected  route="/signin">              
            <CourseDetailsUser/>
          </Protected>
        }/>
        <Route path="/courses/:id/lesson/:lesson" element={
          <Protected  route="/signin">              
            <LessonUser/>
          </Protected>
        }/>

        <Route path="/courses/:id/quizz/:quizz" element={
          <Protected  route="/signin">              
            <Quizz/>
          </Protected>
        }/>

        <Route path="my/profile" element={
          <Protected  route="/signin">              
            <MyProfile/>
          </Protected>
        }/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>

        {/* ---------------------------------------------admin pages-------------------------------------- */}

        <Route path="/users/admin/addnewcourse" element={
          <ProtectedAdmin  route="/users/admin/login">              
            <AddNewCourse/>
          </ProtectedAdmin>
        }/>
        <Route path="/users/admin/home" element={
          <ProtectedAdmin  route="/users/admin/login">   
            <AdminHome/>
          </ProtectedAdmin>
        }/>
        <Route path="/users/admin/courses" element={
          <ProtectedAdmin  route="/users/admin/login">   
            <AdminCourses/>
          </ProtectedAdmin>
        }/>
        <Route path="/users/admin/courses/:id" element={
          <ProtectedAdmin  route="/users/admin/login">   
            <AdminCourseDetail/>
          </ProtectedAdmin>
        }/>
        <Route path="/users/admin/courses/:id/lesson/:lesson" element={
          <ProtectedAdmin  route="/users/admin/login">   
            <AdminLesson/>
          </ProtectedAdmin>}
        />

        <Route path="users/admin/members" element={
          <ProtectedAdmin route="/users/admin/login">
            <MembersList/>
          </ProtectedAdmin>
        }/>
        <Route path="/users/admin/courses/:id/quizz/:quizz" element={
          <ProtectedAdmin  route="/users/admin/login">   
            <ViewQuizDetails/>
          </ProtectedAdmin>}
        />
        <Route path="/users/admin/login" element={<AdminLogin/>}/>

        <Route path="*" element={<NotFound/>} />
        

    </Routes>
    );
  };
  
  export default AppRoutes;