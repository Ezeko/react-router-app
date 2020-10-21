
export const createProject = (project) => {

    return (dispatch, getState) => {
        dispatch({type: 'Create_project', project})
    }

}