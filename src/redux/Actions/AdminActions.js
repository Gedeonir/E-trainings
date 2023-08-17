import axios from './adminConfig'
import * as types from './actionTypes'

export const adminLoginAction=(loginData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.ADMIN_LOGIN_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/admin/login`,loginData,
            {headers:{
                "Content-Type":"application/json"
            }
        });

        dispatch({
            type:types.ADMIN_LOGIN_SUCCESS,
            payload:res
        })

        sessionStorage.setItem('userToken', JSON.stringify(res?.data?.token));
    } catch (error) {
        dispatch({type:types.ADMIN_LOGIN_FAIL,payload:error})
    }
}

export const adminFetchProfileAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.VIEW_ADMIN_PROFILE_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/admin/my/profile`);

        dispatch({
            type:types.VIEW_ADMIN_PROFILE_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.VIEW_ADMIN_PROFILE_FAIL,payload:error})
    }
}