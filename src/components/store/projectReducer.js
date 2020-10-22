const initState = {
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type){
        case 'Create_project' :
            alert('project created')
            console.log(action.project)
            return state
        case 'Create_project_error' :
            alert('error occur')
            console.log(action.err)
            return state
        default:
            return state
    }
}

export default ProjectReducer