import { combineReducers } from 'redux'
import CommentsReducer from './commentsR'

const rootReducer = combineReducers({
    commentsReducer: CommentsReducer,
})

export default rootReducer;