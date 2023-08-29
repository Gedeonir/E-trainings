import axios from './adminConfig'
import * as types from './actionTypes'


export const adminFetchProfileAction=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.VIEW_ADMIN_PROFILE_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/admin/my/profile`,{
            headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('userToken')}`
            }
        });

        dispatch({
            type:types.VIEW_ADMIN_PROFILE_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.VIEW_ADMIN_PROFILE_FAIL,payload:error})
    }
}