import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AddCityReducer } from "./AddCity/Reducer";
import { AddCountryReducer } from "./AddCountry/Reducer";
const rootReducer = combineReducers({
  CountrysName: AddCountryReducer,
  CitysName: AddCityReducer,

});


const Middleware1 = (store) => (next) => (action) => {
  if (typeof (action) === "function") {
    console.log(action);
    return action(store.dispatch);
  }
  next(action)
}
export const store = legacy_createStore(rootReducer, applyMiddleware(Middleware1, thunk));
console.log(store.getState());
