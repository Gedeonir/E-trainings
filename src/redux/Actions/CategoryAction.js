import axios from './adminConfig'
import * as types from './actionTypes'

export const fetchAllCategory=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_ALL_CATEGORIES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/category/allCategories`);

        dispatch({
            type:types.FETCH_ALL_CATEGORIES_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_ALL_CATEGORIES_FAIL,payload:error})
    }
}