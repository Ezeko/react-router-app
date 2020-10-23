
const initState = {
    authError: null
}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS': 
        alert('User Logged In Successfully');
        return {
            ...state,
            authError: null
        }
        case 'SIGNIN_ERROR': 
        alert('Sign in Error');
        return {
            ...state,
            authError: action.err
        }
        case 'SIGNUP_SUCCESS': 
        alert('User Registered Successfully!');
        return {
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR': 
        alert('Registration Error');
        return {
            ...state,
            authError: action.err
        }
        case 'SIGNOUT_ERROR': 
        alert('Sign out Error');
        return {
            state
        }

        case 'SIGNOUT_SUCCESS': 
        alert('Signed Out Successfully');
        return {
            state
        }

        default: 
        return state
    }
}

export default AuthReducer