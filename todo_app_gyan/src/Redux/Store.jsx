
import {legacy_createStore as createStore,combineReducers, applyMiddleware} from 'redux';
import { Countreducer } from './Counter/reducer';
import { todoReducer } from './Todo/reducer';
import thunk from "redux-thunk";
const rootReducer=combineReducers({
    Counter:Countreducer,
    todos:todoReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk));
 store.subscribe(()=>{
        console.log('store',store.getState())
    })
    console.log(store.getState())
    