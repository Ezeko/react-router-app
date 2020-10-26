import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, useSelector } from 'react-redux'
import RootReducer from './store/rootReducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore'
import firebase from 'firebase/app'
import firebaseConfig from './config/firebaseConfig'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import Progress from './components/loaders/Progress';


const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebaseConfig),

    
  )
);

const rrfProps = {
    firebase,
    config: (firebaseConfig, {useFirestoreForProfile: true,userProfile: 'users', attachAuthIsReady: true}),
    dispatch: store.dispatch,
     createFirestoreInstance, // <- needed if using firestore
  }

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <Progress />;
        return children
}
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
          
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();


