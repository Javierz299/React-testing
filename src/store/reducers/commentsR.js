import * as ACTION_TYPES from '../actions/action_type'

const intialState = {
    comments: []
}

const CommentsReducer = (state = intialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SAVE_COMMENT:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export default CommentsReducer;