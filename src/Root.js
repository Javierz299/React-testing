import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/index'

let store = createStore(rootReducer)

function root(props){
    return (
        <Provider store={store}>
            {props.children} {/* <App /> */}
        </Provider>
    )
}
export default root;