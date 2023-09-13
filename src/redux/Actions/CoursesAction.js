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

export const fetchOneQuizz=(courseId,quizzId)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.GET_ONE_QUIZ_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${courseId}/one/quizz/${quizzId}`);

        dispatch({
            type:types.GET_ONE_QUIZ_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.GET_ONE_QUIZ_FAIL,payload:error})
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

export const addQuizz=(quizzData,course)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.ADD_COURSE_QUIZZ_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/course/${course}/quizz/add`,quizzData,
        {headers:{
            "Content-Type":"application/json"
        }})

        dispatch({
            type:types.ADD_COURSE_QUIZZ_SUCCESS,
            payload:res
        })

    } catch (error) {
        dispatch({
            type:types.ADD_COURSE_QUIZZ_FAIL,
            payload:error
        })
    }
}

export const addQuestion=(questionData,quizz)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.ADD_QUIZZ_QUESTION_LOADING
        })

        const res=await axios.post(`${process.env.BACKEND_URL}/course/${quizz}/add/question`,questionData,
        {headers:{
            "Content-Type":"application/json"
        }})

        dispatch({
            type:types.ADD_QUIZZ_QUESTION_SUCCESS,
            payload:res
        })

    } catch (error) {
        dispatch({
            type:types.ADD_QUIZZ_QUESTION_FAIL,
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

export const getQuestions=(quizz)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_QUESTIONS_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${quizz}/view/questions`);

        dispatch({
            type:types.FETCH_QUESTIONS_SUCCESS,payload:res
        })
    } catch (error) {
        dispatch({type:types.FETCH_QUESTIONS_FAIL,payload:error})
    }
}

export const getQuizzes=(courseId)=>async(dispatch)=>{
    try {
        dispatch({
            type:types.FETCH_COURSE_QUIZZES_LOADING
        })

        const res=await axios.get(`${process.env.BACKEND_URL}/course/${courseId}/all-quizzes`);

        dispatch({
            type:types.FETCH_COURSE_QUIZZES_SUCCESS,payload:res
        })
    } catch (error) {
     dispatch({
        type:types.FETCH_COURSE_QUIZZES_FAIL,payload:error
     })   
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
