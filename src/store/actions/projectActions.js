
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const user = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const createdAt = new Date();
        //console.log('state ', getState().firebase.auth.uid)
        //console.log (project)

        firestore.collection('projects').add({
            ...project,
            authorName: user.authorName,
            authorId,
            createdAt,
        }).then (() => {
            return firestore.collection('notifications').add({
                name: user.authorName,
                createdAt,
                content: 'Has added a new blog'
            })
        })
        .then(() =>
        //console.log(createdAt)
            dispatch?.({type: 'Create_project', project})
        ).catch((err) => {
            dispatch({type: 'Create_project_error', err})
        })

    }

}