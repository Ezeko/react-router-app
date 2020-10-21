
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.connection('projects').add({
            ...project,
            authorName: 'Ezeko',
            authorId: 43536,
            createdAt: new Date(),
        }).then(() =>
            dispatch({type: 'Create_project', project})
        ).catch((err) => {
            dispatch({type: 'Create_project_error', err})
        })

    }

}