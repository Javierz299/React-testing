import axios from 'axios'
import * as ACTION_TYPES from './action_type'

export const save_comment = (comment) => {
    return {
        type: ACTION_TYPES.SAVE_COMMENT,
        payload: comment
    }
}

export const fetch_comments = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: ACTION_TYPES.FETCH_COMMENTS,
        payload: response
    }
}