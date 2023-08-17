import axios from './adminConfig'
import * as types from './actionTypes'

export const fetchAllCourses=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_COURSES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/all-courses`);

        dispatch({
            type:types.FETCH_ALL_COURSES_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_ALL_COURSES_FAIL,payload:error})
    }
}