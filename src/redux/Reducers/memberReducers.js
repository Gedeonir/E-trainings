import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}

export const memberLoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.MEMBER_LOGIN_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.MEMBER_LOGIN_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.MEMBER_LOGIN_FAIL:
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

export const memberRegisterReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.MEMBER_REGISTER_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.MEMBER_REGISTER_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.MEMBER_REGISTER_FAIL:
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

export const viewMemberProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.VIEW_MEMBER_PROFILE_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.VIEW_MEMBER_PROFILE_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.VIEW_MEMBER_PROFILE_FAIL:
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