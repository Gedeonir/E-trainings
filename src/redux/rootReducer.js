
import { combineReducers } from 'redux';


import reducer from './Reducers/counterReducer';
import { getAllMembersReducer, getMyCoursesReducer, memberRegisterReducer, viewMemberProfileReducer } from './Reducers/memberReducers';
import { viewAdminProfileReducer } from './Reducers/adminReducers';
import { addCourseReducer, addLessonReducer, fetchAllCoursesLessonsReducer, fetchAllCoursesReducer, fetchOneCourseReducer, fetchOneCoursesLessonsReducer } from './Reducers/CoursesReducer';
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
    AllMembers:getAllMembersReducer

});

export default rootReducer;