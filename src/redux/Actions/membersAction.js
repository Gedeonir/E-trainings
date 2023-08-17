import React from "react";
import * as types from "./actionTypes";
import axios from "./axiosConfig";



export const memberLoginAction=(loginData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.MEMBER_LOGIN_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/member/login`,loginData,
            {headers:{
                "Content-Type":"application/json"
            }
        });

        dispatch({
            type:types.MEMBER_LOGIN_SUCCESS,
            payload:res
        })

        sessionStorage.setItem('memberToken', JSON.stringify(res?.data?.token));
    } catch (error) {
        dispatch({type:types.MEMBER_LOGIN_FAIL,payload:error})
    }
}

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