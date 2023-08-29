import * as types from '../Actions/actionTypes';

const initialState={
    error:null,
    resp:null,
    success:null,
    loading:false
}


export const fetchAllCoursesReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_ALL_COURSES_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_ALL_COURSES_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_ALL_COURSES_FAIL:
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

export const addCourseReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_NEW_COURSE_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.ADD_NEW_COURSE_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.ADD_NEW_COURSE_FAIL:
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

export const fetchAllCoursesLessonsReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_COURSE_LESSONS_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_COURSE_LESSONS_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_COURSE_LESSONS_FAIL:
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

export const fetchOneCoursesLessonsReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_COURSE_LESSON_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.FETCH_COURSE_LESSON_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.FETCH_COURSE_LESSON_FAIL:
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

export const fetchPopularCourseReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.POPULAR_COURSES_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.POPULAR_COURSES_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.POPULAR_COURSES_FAIL:
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

export const fetchOneCourseReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_ONE_COURSE_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.GET_ONE_COURSE_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.GET_ONE_COURSE_FAIL:
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

export const addLessonReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_COURSE_LESSON_LOADING:
            return{
                ...state,
                loading:true
            }
        case types.ADD_COURSE_LESSON_SUCCESS:
            return{
                ...state,
                resp:action.payload,
                success:true,
                loading:false,
                error:null
            }
        case types.ADD_COURSE_LESSON_FAIL:
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

