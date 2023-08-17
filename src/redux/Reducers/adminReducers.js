import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const adminLoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADMIN_LOGIN_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.ADMIN_LOGIN_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.ADMIN_LOGIN_FAIL:
            return{
                ...state,
                error:action.payload,
                success:false,
                loading:false,
                resp:null
            }

        default:
            return state
    }
}

export const viewAdminProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.VIEW_ADMIN_PROFILE_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.VIEW_ADMIN_PROFILE_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.VIEW_ADMIN_PROFILE_FAIL:
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