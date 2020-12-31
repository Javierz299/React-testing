import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from './store/reducers/index'

//In plain Redux, you can only dispatch objects. 
//In order to dispatch async functions, you would need to use a middleware
let store = createStore(rootReducer, applyMiddleware(reduxPromise))
/// can have a stack of middlewares; ACTION => MW1 => MW2 => MW3 => REDUCER
//// M.wares inspect the action and can either deal with it or 
//  pass on to the next() Middleware
function root(props){
    return (
        <Provider store={store}>
            {props.children} {/* <App /> */}
        </Provider>
    )
}
export default root;