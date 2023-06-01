import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducer';
import ListReducer from './reducers/ListReducer';
import HeaderReducer from './reducers/HeaderReducer';

const rootReducer = combineReducers({
    AuthRootReducer: authReducer,
    ListRootReducer: ListReducer,
    HeaderRootReducer: HeaderReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));