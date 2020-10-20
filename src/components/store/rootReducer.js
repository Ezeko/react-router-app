import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';

const RootReducer = combineReducers({
        auth: AuthReducer,
        project: ProjectReducer
    })


export default RootReducer