import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../Reducers/userReducer'
import booksReducer from '../Reducers/booksReducer'
import productReducer from '../Reducers/productReducer'
import { changeFirstName, changeLastName, getAllQuoteFromServer } from '../../Middleware/crud'
import { actions } from '../action';





const reducer = combineReducers({ userReducer, booksReducer, productReducer })
const store = createStore(reducer, applyMiddleware(changeFirstName, changeLastName, getAllQuoteFromServer))
window.store = store
export default store
// store.dispatch({ type: 'GETALL_QUOTE' });
// store.dispatch({ type: 'SET_LAST_NAME' });
// store.dispatch(actions.setLastName());






