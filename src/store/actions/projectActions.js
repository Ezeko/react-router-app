
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const user = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        //console.log('state ', getState().firebase.auth.uid)
        //console.log (project)

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