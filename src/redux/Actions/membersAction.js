import React from "react";
import * as types from "./actionTypes";
import axios from "./axiosConfig";
import {useNavigate} from 'react-router-dom'


export const memberRegisterAction=(memberData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.MEMBER_REGISTER_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/member/register`,memberData,
        {headers:{
            "Content-Type":"application/json"
        }});

        dispatch({
            type:types.MEMBER_REGISTER_SUCCESS,
            payload:res
        })
    } catch (error) {
        console.log(error);
     dispatch({type:types.MEMBER_REGISTER_FAIL,payload:error})   
    }
}

export const memberFetchProfileAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.VIEW_MEMBER_PROFILE_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/member/my/profile`);

        dispatch({
            type:types.VIEW_MEMBER_PROFILE_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.VIEW_MEMBER_PROFILE_FAIL,payload:error})
    }
}

export const getMyCourses=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.GET_MEMBER_COURSES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/member/my/courses`);

        dispatch({
            type:types.GET_MEMBER_COURSES_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_MEMBER_COURSES_FAIL,payload:error});
    }
}

export const getAllMembers=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.GET_ALL_MEMBERS_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/member/all-members`);

        dispatch({
            type:types.GET_ALL_MEMBERS_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_ALL_MEMBERS_FAIL,payload:error});
    }
}