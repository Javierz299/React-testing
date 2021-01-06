import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './client/App';
import reportWebVitals from './reportWebVitals';

// import { Provider } from 'react-redux'
// import rootReducer from './store/reducers/index'
// import { createStore } from 'redux'
import Root from './Root'

// let store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <Route  path="/" component={App} /> {/*<App />*/}
      </BrowserRouter>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
