import axios from './adminConfig'
import * as types from './actionTypes'

export const fetchAllLectures=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_LECTURES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/tutor/allTutors`);

        dispatch({
            type:types.FETCH_ALL_LECTURES_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_ALL_LECTURES_FAIL,payload:error})
    }
}

export const lectureRegisterAction=(lectureData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.REGISTER_LECTURE_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/tutor/addTutor`,lectureData,
        {headers:{
            "Content-Type":"application/json"
        }});

        dispatch({
            type:types.REGISTER_LECTURE_SUCCESS,
            payload:res
        })
    } catch (error) {
        console.log(error);
     dispatch({type:types.REGISTER_LECTURE_FAIL,payload:error})   
    }
}