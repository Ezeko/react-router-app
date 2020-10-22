
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorName: 'Ezeko',
            authorId: 43536,
            createdAt: new Date(),
        }).then(() =>
            dispatch?.({type: 'Create_project', project})
        ).catch((err) => {
            dispatch({type: 'Create_project_error', err})
        })

    }

}