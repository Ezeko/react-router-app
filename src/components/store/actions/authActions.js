export const signIn = (userDetails) => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(userDetails.email, userDetails.password)
        .then(()=> dispatch?.({type: 'SIGNIN_SUCCESS'}))
        .catch((err) => {
            dispatch({ type: 'SIGNIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()
        //console.log('fire ', firebase.auth())
        firebase.auth().signOut()
        .then(()=> dispatch?.({type: 'SIGNOUT_SUCCESS'}))
        .catch((err) => {
            dispatch({type: 'SIGNOUT_ERROR', err})
        })

    }
}

export const signUp = (userDetails) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password)
        .then((res) => {
            console.log('userid', res.user.id)
            return (
                firestore.collection('users').doc(res.user.uid).set({
                    authorName: userDetails.authorName,
                    initials: userDetails.authorName[0] + userDetails.authorName[1]
                })
            )
        })
        .then(()=> dispatch?.({type: 'SIGNUP_SUCCESS'}))
        .catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err})
        }
        )
    }
}