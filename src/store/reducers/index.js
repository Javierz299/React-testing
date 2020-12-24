import { combineReducers } from 'redux'
import CommentsReducer from './commentsR'
import AuthReducer from './authR'

const rootReducer = combineReducers({
    commentsReducer: CommentsReducer,
    authReducer: AuthReducer,
})

export default rootReducer;