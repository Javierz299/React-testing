import * as ACTION_TYPES from '../actions/action_type'

const initialState = {
    authenticated: '',
    signed_in: false,
    errorMessage: '',
}    //auth: { authenicated: localStorage.getItem('token') }


const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SIGN_IN:
            return {
                ...state,
                signed_in: true
            }
        case ACTION_TYPES.SIGN_OUT:
            return {
                ...state,
                signed_in: false
            }
        case ACTION_TYPES.AUTH_USER:
            console.log('DISPATCHED',action.payload)
            return {
                ...state,
                authenticated: action.payload
            }
        case ACTION_TYPES.AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }

};

export default AuthReducer;