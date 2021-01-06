import axios from 'axios'
import * as ACTION_TYPES from './action_type'

export const save_comment = (comment) => {
    return {
        type: ACTION_TYPES.SAVE_COMMENT,
        payload: comment
    }
};
//In plain Redux, you can only dispatch objects. 
//In order to dispatch async functions, you would need to use a middleware
                        //async
export const fetch_comments = () => { // dont need async await with custom middleware of 'async'
                //await
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    //console.log('response',response)
    return {
        type: ACTION_TYPES.FETCH_COMMENTS,
        payload: response
    }
};

export const sign_in = () => {
    return {
        type: ACTION_TYPES.SIGN_IN,
        payload: true
    }
};

export const sign_out = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT,
        payload: false
    }
};
//     facilitated by the 'dispatch' function
//                   _________
// action creator => action => middleware => reducers
//                  __________
//                      {email, password}
export const sign_up = (formProps) => {
    //REDUX-THUNK allows for total control over the 
    // dispatch process
    return (dispatch) => {
//axios.post('http://localhost:5000/api/signup',{email, password });
        axios.post('http://localhost:5000/api/signup',formProps)
    };
};