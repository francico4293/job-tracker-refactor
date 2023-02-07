import { 
    legacy_createStore as createStore, 
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { themeReducer } from './reducers/themeReducer';

const reducers = combineReducers({
    theme: themeReducer
});

const themeFromSessionStorage = sessionStorage.getItem('theme') 
    ? sessionStorage.getItem('theme') 
    : 'light';

const initialState = { theme: themeFromSessionStorage };

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
