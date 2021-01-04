import stateSchema from './stateSchema/stateSchema'
import tv4 from 'tv4'

//immediatly call next() and pass action on
const stateValidator = ({ dispatch, getState }) => { // export default ({ dispatch }) => (next) => (action) => {...}
    return ( next ) => {
        return ( action ) => {
            next(action);
        
        console.log('getstate',getState())
        console.log(tv4.validate(getState(), stateSchema))
        ///console.log('valid',valid)

        }
    }
    
}

export default stateValidator
