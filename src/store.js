import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer';


const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const store = storeWithMiddleware(reducer);

export default store;



