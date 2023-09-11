import React from "react";
import * as types from "./actionTypes";
import axios from "./axiosConfig";
import {useNavigate} from 'react-router-dom'


export const memberRegisterAction=(memberData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.MEMBER_REGISTER_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/trainee/register`,memberData,
        {headers:{
            "Content-Type":"application/json"
        }});

        dispatch({
            type:types.MEMBER_REGISTER_SUCCESS,
            payload:res
        })
    } catch (error) {
     dispatch({type:types.MEMBER_REGISTER_FAIL,payload:error})   
    }
}

export const memberFetchProfileAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.VIEW_MEMBER_PROFILE_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/trainee/my/profile`,
        {
            headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('memberToken')}`
            }
        });

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

        const res=await axios.get(`${process.env.BACKEND_URL}/trainee/my/courses`,{
            headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('memberToken')}`
            }
        });

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

        const res=await axios.get(`${process.env.BACKEND_URL}/trainee/all-trainees`);

        dispatch({
            type:types.GET_ALL_MEMBERS_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_ALL_MEMBERS_FAIL,payload:error});
    }
}

export const getOneMember=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.GET_ONE_MEMBER_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/trainee/${id}`);

        dispatch({
            type:types.GET_ONE_MEMBER_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_ONE_MEMBER_FAIL,payload:error});
    }
}


export const fetchMembersByScore=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.TOP_MEMBERS_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/trainee/top/member`);

        dispatch({
            type:types.TOP_MEMBERS_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.TOP_MEMBERS_FAIL,payload:error})
    }
}

