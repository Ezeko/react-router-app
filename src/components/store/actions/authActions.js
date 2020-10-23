const signIn = (userDetails) => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase()

        firebase.auth.signInWithEmailAndPassword(userDetails.email, userDetails.password)
        .then(()=> dispatch('SIGNIN_SUCCESS')
        .catch((err) => dispatch('SIGNIN_ERROR', err))
        )
    }
}