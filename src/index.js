import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Redux
// import { Provider } from 'react-redux';
// import store from './store';


ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
