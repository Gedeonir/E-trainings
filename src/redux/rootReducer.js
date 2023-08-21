
import { combineReducers } from 'redux';


import reducer from './Reducers/counterReducer';
import { getMyCoursesReducer, memberRegisterReducer, viewMemberProfileReducer } from './Reducers/memberReducers';
import { viewAdminProfileReducer } from './Reducers/adminReducers';
import { addCourseReducer, fetchAllCoursesLessonsReducer, fetchAllCoursesReducer, fetchOneCourseReducer } from './Reducers/CoursesReducer';
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
    myCourses:getMyCoursesReducer
});

export default rootReducer;