
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const user = getState().state.firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorName: user.authorName,
            authorId,
            createdAt: new Date(),
        }).then(() =>
            dispatch?.({type: 'Create_project', project})
        ).catch((err) => {
            dispatch({type: 'Create_project_error', err})
        })

    }

}