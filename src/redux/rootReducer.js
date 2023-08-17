
import { combineReducers } from 'redux';


import reducer from './Reducers/counterReducer';
import { memberLoginReducer, memberRegisterReducer, viewMemberProfileReducer } from './Reducers/memberReducers';

const rootReducer = combineReducers({

    counter: reducer,
    memberLogin:memberLoginReducer,
    memberRegister:memberRegisterReducer,
    memberProfile:viewMemberProfileReducer
});

export default rootReducer;