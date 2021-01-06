import { combineReducers } from 'redux'
import CommentsReducer from './commentsR'
import AuthReducer from './authR'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    commentsReducer: CommentsReducer,
    authReducer: AuthReducer,
    form: formReducer,
})

export default rootReducer;