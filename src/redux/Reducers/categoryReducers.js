import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const fetchAllCategoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_CATEGORIES_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_CATEGORIES_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ALL_CATEGORIES_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }
        default:
            return state;
    }
}

