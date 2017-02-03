import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import { Router, Route,browserHistory } from 'react-router';
import Main from "./components/Main";
import Login from "./components/Login";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="process" component={App}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
