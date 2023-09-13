
import { combineReducers } from 'redux';


import reducer from './Reducers/counterReducer';
import { getAllMembersReducer,fetchMembersByScoreReducers, getMyCoursesReducer, getOneMemberReducer, memberRegisterReducer, viewMemberProfileReducer } from './Reducers/memberReducers';
import { viewAdminProfileReducer } from './Reducers/adminReducers';
import { addCourseReducer, addLessonReducer, addQuestionReducer, addQuizzReducer, fetchAllCoursesLessonsReducer, fetchAllCoursesReducer, fetchOneCourseReducer, fetchOneCoursesLessonsReducer, fetchPopularCourseReducer, getOneQuizReducer, getQuestionsReducer, getQuizzesReducer } from './Reducers/CoursesReducer';
import { fetchAllCategoryReducer } from './Reducers/categoryReducers';
import { fetchAllLecturesReducer,addLecturesReducer } from './Reducers/lecturesReducers';

const rootReducer = combineReducers({

    counter: reducer,
    memberRegister:memberRegisterReducer,
    memberProfile:viewMemberProfileReducer,
    adminProfile:viewAdminProfileReducer,
    allCourses:fetchAllCoursesReducer,
    allCategories:fetchAllCategoryReducer,
    allLectures:fetchAllLecturesReducer,
    addLecture:addLecturesReducer,
    addCourse:addCourseReducer,
    courseLessons:fetchAllCoursesLessonsReducer,
    oneCourse:fetchOneCourseReducer,
    myCourses:getMyCoursesReducer,
    addLesson:addLessonReducer,
    oneLesson:fetchOneCoursesLessonsReducer,
    AllMembers:getAllMembersReducer,
    oneMember:getOneMemberReducer,
    popularCourses:fetchPopularCourseReducer,
    topMembers:fetchMembersByScoreReducers,
    quizzes:getQuizzesReducer,
    addQuizz:addQuizzReducer,
    addQuestion:addQuestionReducer,
    getQuestions:getQuestionsReducer,
    oneQuiz:getOneQuizReducer

});

export default rootReducer;