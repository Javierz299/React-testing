import * as ACTION_TYPES from '../actions/action_type'

const intialState = {
    comments: ['test1','test2']
}

const CommentsReducer = (state = intialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SAVE_COMMENT:
            console.log('reducer:',action.payload)
            return {
                ...state,
                comments: [...state.comments,action.payload]
            }
        case ACTION_TYPES.FETCH_COMMENTS:
            //console.log('data',action.payload.data)
            const comments = action.payload.data.map(comment => comment.name);
            return {
                ...state,
                comments: [...state.comments,...comments]
            }
        default:
            return state
    }
}

export default CommentsReducer;