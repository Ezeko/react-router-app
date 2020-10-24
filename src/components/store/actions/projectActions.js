
export const createProject = (project) => {

    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            createdAt: new Date(),
        }).then(() =>
            dispatch?.({type: 'Create_project', project})
        ).catch((err) => {
            dispatch({type: 'Create_project_error', err})
        })

    }

}