import * as ACTION_TYPES from '../actions/action_type'

const initialState = {
    authenicated: '',
    signed_in: false,
    errorMessage: ''
}

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
        default:
            return state
    }

};

export default AuthReducer;