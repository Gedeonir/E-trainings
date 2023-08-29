import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
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

export const getMyCoursesReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_MEMBER_COURSES_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.GET_MEMBER_COURSES_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.GET_MEMBER_COURSES_FAIL:
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

export const getAllMembersReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_ALL_MEMBERS_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.GET_ALL_MEMBERS_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.GET_MEMBER_COURSES_FAIL:
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

export const getOneMemberReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_ONE_MEMBER_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.GET_ONE_MEMBER_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.GET_ONE_MEMBER_FAIL:
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

export const fetchMembersByScoreReducers=(state=initialState,action)=>{
    switch(action.type){
        case types.TOP_MEMBERS_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.TOP_MEMBERS_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.TOP_MEMBERS_FAIL:
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