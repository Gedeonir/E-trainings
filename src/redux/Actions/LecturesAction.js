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