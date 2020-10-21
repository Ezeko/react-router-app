const initState = {
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type){
        case 'Create_project' :
            console.log(action.project)
            break;
        default:
            break
    }
    return state
}

export default ProjectReducer