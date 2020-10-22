import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';

const RootReducer = combineReducers({
        auth: AuthReducer,
        project: ProjectReducer,
        firestore: firestoreReducer,
    })


export default RootReducer