import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import async from './middlewares/async'
import rootReducer from './store/reducers/index'

//import reduxPromise from 'redux-promise'  redux-promise lets you pass promises directly to dispatch() , or 
                                           //put promises inside of an action object. 


//In plain Redux, you can only dispatch objects. 
//In order to dispatch async functions, you would need to use a middleware
let store = createStore(rootReducer, applyMiddleware(async))
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