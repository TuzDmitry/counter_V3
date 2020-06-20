import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./countReducer";

let rootReducer=combineReducers({
    counterReducer:reducer
})


export type AppRootState=ReturnType<typeof rootReducer>

export const store=createStore(rootReducer, applyMiddleware(thunk))