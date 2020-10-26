import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ProjectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const RootReducer = combineReducers({
        auth: AuthReducer,
        project: ProjectReducer,
        firestore: firestoreReducer,
        firebase: firebaseReducer
    })


export default RootReducer