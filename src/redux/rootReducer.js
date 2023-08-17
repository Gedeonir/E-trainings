
import { combineReducers } from 'redux';


import reducer from './Reducers/counterReducer';
import { memberLoginReducer, memberRegisterReducer, viewMemberProfileReducer } from './Reducers/memberReducers';
import { adminLoginReducer, viewAdminProfileReducer } from './Reducers/adminReducers';
import { fetchAllCoursesReducer } from './Reducers/CoursesReducer';
import { fetchAllCategoryReducer } from './Reducers/categoryReducers';
import { fetchAllLecturesReducer } from './Reducers/lecturesReducers';

const rootReducer = combineReducers({

    counter: reducer,
    memberLogin:memberLoginReducer,
    memberRegister:memberRegisterReducer,
    memberProfile:viewMemberProfileReducer,
    adminLogin:adminLoginReducer,
    adminProfile:viewAdminProfileReducer,
    allCourses:fetchAllCoursesReducer,
    allCategories:fetchAllCategoryReducer,
    allLectures:fetchAllLecturesReducer
});

export default rootReducer;