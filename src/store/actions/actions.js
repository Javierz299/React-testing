import axios from 'axios'
import * as ACTION_TYPES from './action_type'

export const save_comment = (comment) => {
    return {
        type: ACTION_TYPES.SAVE_COMMENT,
        payload: comment
    }
}
//In plain Redux, you can only dispatch objects. 
//In order to dispatch async functions, you would need to use a middleware
export const fetch_comments = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    console.log('response',response)
    return {
        type: ACTION_TYPES.FETCH_COMMENTS,
        payload: response
    }
}

export const sign_in = () => {
    return {
        type: ACTION_TYPES.SIGN_IN,
        payload: true
    }
}

export const sign_out = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT,
        payload: false
    }
}