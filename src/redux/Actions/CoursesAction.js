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

export const fetchOneCourses=(courseId)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.GET_ONE_COURSE_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${courseId}`);

        dispatch({
            type:types.GET_ONE_COURSE_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_ONE_COURSE_FAIL,payload:error})
    }
}

export const addCourseAction=(courseData)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.ADD_NEW_COURSE_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/course/addNewCourse`,courseData,
        {headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${sessionStorage.getItem('userToken')}`

        }});

        dispatch({
            type:types.ADD_NEW_COURSE_SUCCESS,
            payload:res
        })


    } catch (error) {
        dispatch({
            type:types.ADD_NEW_COURSE_FAIL,
            payload:error
        })
    }
}

export const addCourseLessonAction=(courseData,course)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.ADD_COURSE_LESSON_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/course/${course}/addLesson`,courseData,
        {headers:{
            "Content-Type":"application/json"
        }});

        dispatch({
            type:types.ADD_COURSE_LESSON_SUCCESS,
            payload:res
        })


    } catch (error) {
        dispatch({
            type:types.ADD_COURSE_LESSON_FAIL,
            payload:error
        })
    }
}


export const fetchAllCoursesLessons=(courseId)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_COURSE_LESSONS_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${courseId}/lessons`);

        dispatch({
            type:types.FETCH_COURSE_LESSONS_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_COURSE_LESSONS_FAIL,payload:error})
    }
}

export const fetchPopularCourse=()=>async(dispatch)=>{
    try {
        dispatch({
            type:types.POPULAR_COURSES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/popular/courses`);

        dispatch({
            type:types.POPULAR_COURSES_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.POPULAR_COURSES_FAIL,payload:error})
    }
}

export const fetchOneCoursesLesson=(courseId,lesson)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_COURSE_LESSON_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${courseId}/lessons/${lesson}`);

        dispatch({
            type:types.FETCH_COURSE_LESSON_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_COURSE_LESSON_FAIL,payload:error})
    }
}
