import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import RootReducer from './components/store/rootReducer'
import {createStore, applyMiddleware,} from 'redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, getFirestore} from 'redux-firestore'
import firebase from 'firebase'
import firebaseConfig from './config/firebaseConfig'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'


const store = createStore(
  RootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
  }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
