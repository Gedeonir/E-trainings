import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const fetchAllLecturesReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_LECTURES_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_LECTURES_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ALL_LECTURES_FAIL:
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
export const addLecturesReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.REGISTER_LECTURE_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.REGISTER_LECTURE_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.REGISTER_LECTURE_FAIL:
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